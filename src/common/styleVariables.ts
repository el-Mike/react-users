export enum Color {
  primary = 'primary',
  onPrimary = 'onPrimary',
  primaryActive = 'primaryActive',
  secondary = 'secondary',
  onSecondary = 'onSecondary',
  secondaryActive = 'secondaryActive',
  background = 'background',
  surface = 'surface',
  onBackground = 'onBackground',
  onSurface = 'onSurface',
  danger = 'danger',
  success = 'success',
}

interface Colors {
  primary: string;
  onPrimary: string;
  primaryActive: string;
  secondary: string;
  onSecondary: string;
  secondaryActive: string;
  background: string;
  surface: string;
  onBackground: string;
  onSurface: string;
  danger: string;
  success: string;
  /**
   * Index signagure for retrieving colors via
   * brackets.
   */
  [key: string]: string;
}

export const colors: Colors = {
  primary: '#222',
  onPrimary: '#fff',
  primaryActive: '#ffcc00',
  secondary: '#777',
  onSecondary: '#ddd',
  secondaryActive: '#797979',
  background: '#444',
  onBackground: '#fff',
  surface: '#999',
  onSurface: '#fff',
  success: '#dc3545',
  danger: '#28a745',
};

export const phoneBreakpoint = '600px';
