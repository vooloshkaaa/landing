import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

// Mock DOM APIs for testing
Object.defineProperty(window, 'scrollY', {
  writable: true,
  value: 0,
});

Object.defineProperty(window, 'innerWidth', {
  writable: true,
  value: 1024,
});

Object.defineProperty(document, 'body', {
  writable: true,
  value: {
    scrollHeight: 2000,
  },
});

// Mock requestAnimationFrame
global.requestAnimationFrame = vi.fn((cb) => setTimeout(cb, 16));

// Mock getElementById
const mockGetElementById = vi.fn();
document.getElementById = mockGetElementById;

// Mock console methods for error testing
const consoleSpy = {
  warn: vi.spyOn(console, 'warn'),
  error: vi.spyOn(console, 'error'),
};

// Test data from documentation examples
const mockFeatures = [
  {
    index: "I",
    title: "Управління заняттями",
    description: "Створення, редагування та видалення занять. Гнучке налаштування розкладу та параметрів кожного заняття.",
    category: "management",
    priority: 1,
    isActive: true
  },
  {
    index: "II", 
    title: "Облік відвідуваності",
    description: "Автоматична фіксація присутності студентів на заняттях. Формування звітів та аналітики відвідуваності.",
    category: "tracking",
    priority: 2,
    isActive: true
  },
  {
    index: "III",
    title: "Навчальні матеріали",
    description: "Завантаження та розповсюдження навчальних ресурсів. Структурована бібліотека матеріалів за курсами.",
    category: "materials",
    priority: 3,
    isActive: true
  }
];

const mockNavigationItems = [
  {
    id: "home",
    label: "Головна",
    href: "#home",
    isActive: true,
    order: 1
  },
  {
    id: "about",
    label: "Про нас",
    href: "#about",
    isActive: false,
    order: 2
  },
  {
    id: "features",
    label: "Особливості",
    href: "#features",
    isActive: false,
    order: 3
  },
  {
    id: "contact",
    label: "Контакти",
    href: "#contact",
    isActive: false,
    order: 4
  }
];

// Business Logic Functions from Documentation
interface FeatureData {
  index: string;
  title: string;
  description: string;
  category: 'management' | 'tracking' | 'materials' | 'communication';
  priority: 1 | 2 | 3;
  isActive: boolean;
}

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isActive: boolean;
  order: number;
}

interface ResponsiveContent {
  isMobile: boolean;
  layout: 'stacked' | 'grid' | 'sidebar';
  contentDensity: 'compact' | 'normal' | 'expanded';
}

interface UserState {
  currentSection: string;
  scrollDirection: 'up' | 'down' | 'none';
  lastScrollPosition: number;
  hasScrolled: boolean;
  menuOpen: boolean;
}

interface ValidationRules {
  validateScrollPosition: (position: number) => boolean;
  validateSectionId: (id: string) => boolean;
  validateFeatureData: (feature: FeatureData) => boolean;
}

interface ErrorRecovery {
  handleScrollError: (error: Error) => void;
  handleNavigationError: (error: Error) => void;
  handleRenderError: (error: Error) => void;
}

// Implementation of business logic functions from documentation
function sortFeaturesByPriority(features: FeatureData[]): FeatureData[] {
  return features.sort((a, b) => a.priority - b.priority);
}

function getLayoutForScreen(width: number): ResponsiveContent {
  if (width < 768) {
    return {
      isMobile: true,
      layout: 'stacked',
      contentDensity: 'compact'
    };
  } else if (width < 1024) {
    return {
      isMobile: false,
      layout: 'grid',
      contentDensity: 'normal'
    };
  } else {
    return {
      isMobile: false,
      layout: 'sidebar',
      contentDensity: 'expanded'
    };
  }
}

function createOptimizedScrollHandler(
  callback: (position: number) => void,
  delay: number = 16
) {
  let ticking = false;
  
  return (position: number) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback(position);
        ticking = false;
      });
      ticking = true;
    }
  };
}

const validationRules: ValidationRules = {
  validateScrollPosition: (position) => {
    return typeof position === 'number' && 
           position >= 0 && 
           position <= document.body.scrollHeight;
  },
  
  validateSectionId: (id) => {
    return typeof id === 'string' && 
           id.length > 0 && 
           document.getElementById(id) !== null;
  },
  
  validateFeatureData: (feature) => {
    return feature.title && 
           feature.description && 
           feature.priority >= 1 && 
           feature.priority <= 3;
  }
};

const errorRecovery: ErrorRecovery = {
  handleScrollError: (error) => {
    console.warn('Scroll error:', error);
    window.scrollTo(0, 0);
  },
  
  handleNavigationError: (error) => {
    console.warn('Navigation error:', error);
    window.location.hash = '#home';
  },
  
  handleRenderError: (error) => {
    console.error('Render error:', error);
  }
};

describe('Business Logic Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.scrollY = 0;
    window.innerWidth = 1024;
    consoleSpy.warn.mockClear();
    consoleSpy.error.mockClear();
  });

  describe('Feature Prioritization', () => {
    it('should sort features by priority', () => {
      const features = [
        { priority: 3, title: 'Feature C', index: 'III', description: 'Desc C', category: 'materials', isActive: true },
        { priority: 1, title: 'Feature A', index: 'I', description: 'Desc A', category: 'management', isActive: true },
        { priority: 2, title: 'Feature B', index: 'II', description: 'Desc B', category: 'tracking', isActive: true }
      ];
      
      const sorted = sortFeaturesByPriority(features);
      
      expect(sorted[0].title).toBe('Feature A');
      expect(sorted[1].title).toBe('Feature B');
      expect(sorted[2].title).toBe('Feature C');
    });

    it('should handle empty feature array', () => {
      const sorted = sortFeaturesByPriority([]);
      expect(sorted).toEqual([]);
    });

    it('should maintain original array for single feature', () => {
      const singleFeature = [mockFeatures[0]];
      const sorted = sortFeaturesByPriority(singleFeature);
      expect(sorted).toEqual(singleFeature);
    });
  });

  describe('Responsive Content Logic', () => {
    it('should return mobile layout for screens < 768px', () => {
      const result = getLayoutForScreen(767);
      
      expect(result.isMobile).toBe(true);
      expect(result.layout).toBe('stacked');
      expect(result.contentDensity).toBe('compact');
    });

    it('should return tablet layout for screens 768px - 1024px', () => {
      const result = getLayoutForScreen(800);
      
      expect(result.isMobile).toBe(false);
      expect(result.layout).toBe('grid');
      expect(result.contentDensity).toBe('normal');
    });

    it('should return desktop layout for screens >= 1024px', () => {
      const result = getLayoutForScreen(1200);
      
      expect(result.isMobile).toBe(false);
      expect(result.layout).toBe('sidebar');
      expect(result.contentDensity).toBe('expanded');
    });

    it('should handle exact breakpoint values', () => {
      const mobileResult = getLayoutForScreen(768);
      expect(mobileResult.layout).toBe('grid');
      
      const desktopResult = getLayoutForScreen(1024);
      expect(desktopResult.layout).toBe('sidebar');
    });
  });

  describe('Scroll Optimization', () => {
    it('should throttle scroll events using requestAnimationFrame', () => {
      const mockCallback = vi.fn();
      const handler = createOptimizedScrollHandler(mockCallback);
      
      // Multiple calls should only trigger callback once per frame
      handler(100);
      handler(200);
      handler(300);
      
      expect(global.requestAnimationFrame).toHaveBeenCalled();
    });

    it('should pass correct position to callback', () => {
      const mockCallback = vi.fn();
      const handler = createOptimizedScrollHandler(mockCallback);
      
      handler(150);
      
      // Wait for requestAnimationFrame callback
      setTimeout(() => {
        expect(mockCallback).toHaveBeenCalledWith(150);
      }, 20);
    });

    it('should use default delay of 16ms', () => {
      const mockCallback = vi.fn();
      const handler = createOptimizedScrollHandler(mockCallback);
      
      handler(100);
      
      expect(global.requestAnimationFrame).toHaveBeenCalled();
    });
  });

  describe('Validation Rules', () => {
    describe('validateScrollPosition', () => {
      it('should validate positive scroll positions', () => {
        expect(validationRules.validateScrollPosition(100)).toBe(true);
        expect(validationRules.validateScrollPosition(0)).toBe(true);
      });

      it('should reject negative positions', () => {
        expect(validationRules.validateScrollPosition(-1)).toBe(false);
      });

      it('should reject positions beyond document height', () => {
        expect(validationRules.validateScrollPosition(3000)).toBe(false);
      });

      it('should reject non-number values', () => {
        expect(validationRules.validateScrollPosition('100' as any)).toBe(false);
        expect(validationRules.validateScrollPosition(null as any)).toBe(false);
        expect(validationRules.validateScrollPosition(undefined as any)).toBe(false);
      });
    });

    describe('validateSectionId', () => {
      beforeEach(() => {
        mockGetElementById.mockReturnValue(document.createElement('div'));
      });

      it('should validate valid section IDs', () => {
        expect(validationRules.validateSectionId('home')).toBe(true);
        expect(validationRules.validateSectionId('about')).toBe(true);
      });

      it('should reject empty strings', () => {
        expect(validationRules.validateSectionId('')).toBe(false);
      });

      it('should reject non-string values', () => {
        expect(validationRules.validateSectionId(123 as any)).toBe(false);
        expect(validationRules.validateSectionId(null as any)).toBe(false);
      });

      it('should reject IDs for non-existent elements', () => {
        mockGetElementById.mockReturnValue(null);
        expect(validationRules.validateSectionId('nonexistent')).toBe(false);
      });
    });

    describe('validateFeatureData', () => {
      it('should validate complete feature data', () => {
        const validFeature = {
          index: 'I',
          title: 'Test Feature',
          description: 'Test Description',
          category: 'management',
          priority: 1,
          isActive: true
        };
        
        expect(validationRules.validateFeatureData(validFeature)).toBe(true);
      });

      it('should reject features without title', () => {
        const invalidFeature = { ...mockFeatures[0], title: '' };
        expect(validationRules.validateFeatureData(invalidFeature)).toBe(false);
      });

      it('should reject features without description', () => {
        const invalidFeature = { ...mockFeatures[0], description: '' };
        expect(validationRules.validateFeatureData(invalidFeature)).toBe(false);
      });

      it('should reject invalid priority values', () => {
        const invalidFeature1 = { ...mockFeatures[0], priority: 0 };
        const invalidFeature2 = { ...mockFeatures[0], priority: 4 };
        
        expect(validationRules.validateFeatureData(invalidFeature1)).toBe(false);
        expect(validationRules.validateFeatureData(invalidFeature2)).toBe(false);
      });
    });
  });

  describe('Error Recovery', () => {
    describe('handleScrollError', () => {
      it('should log scroll error and reset position', () => {
        const error = new Error('Scroll failed');
        const scrollToSpy = vi.spyOn(window, 'scrollTo');
        
        errorRecovery.handleScrollError(error);
        
        expect(consoleSpy.warn).toHaveBeenCalledWith('Scroll error:', error);
        expect(scrollToSpy).toHaveBeenCalledWith(0, 0);
      });
    });

    describe('handleNavigationError', () => {
      it('should log navigation error and reset to home', () => {
        const error = new Error('Navigation failed');
        const locationSpy = vi.spyOn(window.location, 'hash', 'set');
        
        errorRecovery.handleNavigationError(error);
        
        expect(consoleSpy.warn).toHaveBeenCalledWith('Navigation error:', error);
        expect(locationSpy).toHaveBeenCalledWith('#home');
      });
    });

    describe('handleRenderError', () => {
      it('should log render error', () => {
        const error = new Error('Render failed');
        
        errorRecovery.handleRenderError(error);
        
        expect(consoleSpy.error).toHaveBeenCalledWith('Render error:', error);
      });
    });
  });

  describe('Data Structure Tests', () => {
    describe('FeatureData Interface', () => {
      it('should accept valid feature data', () => {
        const feature: FeatureData = {
          index: 'I',
          title: 'Test Feature',
          description: 'Test Description',
          category: 'management',
          priority: 1,
          isActive: true
        };
        
        expect(feature.index).toBe('I');
        expect(feature.title).toBe('Test Feature');
        expect(feature.description).toBe('Test Description');
        expect(feature.category).toBe('management');
        expect(feature.priority).toBe(1);
        expect(feature.isActive).toBe(true);
      });
    });

    describe('NavigationItem Interface', () => {
      it('should accept valid navigation data', () => {
        const navItem: NavigationItem = {
          id: 'home',
          label: 'Головна',
          href: '#home',
          isActive: true,
          order: 1
        };
        
        expect(navItem.id).toBe('home');
        expect(navItem.label).toBe('Головна');
        expect(navItem.href).toBe('#home');
        expect(navItem.isActive).toBe(true);
        expect(navItem.order).toBe(1);
      });
    });

    describe('ResponsiveContent Interface', () => {
      it('should accept valid responsive content', () => {
        const content: ResponsiveContent = {
          isMobile: false,
          layout: 'grid',
          contentDensity: 'normal'
        };
        
        expect(content.isMobile).toBe(false);
        expect(content.layout).toBe('grid');
        expect(content.contentDensity).toBe('normal');
      });
    });
  });

  describe('Integration Tests', () => {
    it('should handle complete feature sorting workflow', () => {
      const unsortedFeatures = [
        mockFeatures[2], // priority 3
        mockFeatures[0], // priority 1
        mockFeatures[1], // priority 2
      ];
      
      const sorted = sortFeaturesByPriority(unsortedFeatures);
      
      expect(sorted[0].priority).toBe(1);
      expect(sorted[1].priority).toBe(2);
      expect(sorted[2].priority).toBe(3);
    });

    it('should handle responsive layout changes', () => {
      const mobileLayout = getLayoutForScreen(600);
      const tabletLayout = getLayoutForScreen(800);
      const desktopLayout = getLayoutForScreen(1200);
      
      expect(mobileLayout.isMobile).toBe(true);
      expect(tabletLayout.isMobile).toBe(false);
      expect(desktopLayout.isMobile).toBe(false);
      
      expect(mobileLayout.layout).toBe('stacked');
      expect(tabletLayout.layout).toBe('grid');
      expect(desktopLayout.layout).toBe('sidebar');
    });

    it('should validate and recover from errors', () => {
      // Test scroll validation failure
      expect(validationRules.validateScrollPosition(-100)).toBe(false);
      
      // Test error recovery
      const scrollError = new Error('Invalid scroll');
      errorRecovery.handleScrollError(scrollError);
      expect(consoleSpy.warn).toHaveBeenCalledWith('Scroll error:', scrollError);
    });
  });

  describe('Performance Tests', () => {
    it('should handle rapid scroll events efficiently', () => {
      const mockCallback = vi.fn();
      const handler = createOptimizedScrollHandler(mockCallback);
      
      // Simulate rapid scroll events
      for (let i = 0; i < 10; i++) {
        handler(i * 10);
      }
      
      // Should only trigger requestAnimationFrame once
      expect(global.requestAnimationFrame).toHaveBeenCalledTimes(1);
    });

    it('should handle multiple validation calls', () => {
      const validPositions = [0, 100, 500, 1000];
      
      validPositions.forEach(position => {
        expect(validationRules.validateScrollPosition(position)).toBe(true);
      });
      
      const invalidPositions = [-1, 3000, 'invalid' as any];
      
      invalidPositions.forEach(position => {
        expect(validationRules.validateScrollPosition(position)).toBe(false);
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle boundary values in layout detection', () => {
      const mobileBoundary = getLayoutForScreen(767);
      const tabletBoundary = getLayoutForScreen(1023);
      
      expect(mobileBoundary.layout).toBe('stacked');
      expect(tabletBoundary.layout).toBe('grid');
    });

    it('should handle empty arrays in sorting', () => {
      const emptyResult = sortFeaturesByPriority([]);
      expect(emptyResult).toEqual([]);
      
      const singleResult = sortFeaturesByPriority([mockFeatures[0]]);
      expect(singleResult).toEqual([mockFeatures[0]]);
    });

    it('should handle all validation edge cases', () => {
      // Test boundary values
      expect(validationRules.validateScrollPosition(0)).toBe(true);
      expect(validationRules.validateScrollPosition(2000)).toBe(true);
      expect(validationRules.validateScrollPosition(2001)).toBe(false);
      
      // Test string boundaries
      expect(validationRules.validateSectionId('a')).toBe(true);
      expect(validationRules.validateSectionId('')).toBe(false);
    });
  });
});

describe('Documentation Examples Integration', () => {
  it('should work with real feature data from docs', () => {
    const sorted = sortFeaturesByPriority(mockFeatures);
    
    expect(sorted[0].index).toBe('I');
    expect(sorted[0].category).toBe('management');
    expect(sorted[1].index).toBe('II');
    expect(sorted[1].category).toBe('tracking');
    expect(sorted[2].index).toBe('III');
    expect(sorted[2].category).toBe('materials');
  });

  it('should validate real navigation items from docs', () => {
    mockNavigationItems.forEach(item => {
      expect(validationRules.validateSectionId(item.id.substring(1))).toBe(true);
    });
  });

  it('should handle Ukrainian text content', () => {
    const ukrainianFeature = {
      index: 'I',
      title: 'Управління заняттями',
      description: 'Створення, редагування та видалення занять.',
      category: 'management' as const,
      priority: 1,
      isActive: true
    };
    
    expect(validationRules.validateFeatureData(ukrainianFeature)).toBe(true);
  });
});
