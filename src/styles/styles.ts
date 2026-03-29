/**
 * Reusable style objects for the application.
 * This pattern simulates React Native's StyleSheet.create for a web environment.
 */

export const fonts = {
  sans: "'Inter', system-ui, -apple-system, sans-serif",
  light: "'Nunito Sans', sans-serif",
};

export const styles = {
  container: {
    padding: '20px',
    maxWidth: '1440px',
    margin: '0 auto',
  },
  baseText: {
    fontFamily: fonts.sans,
    fontSize: '16px',
    color: '#0f172a', // --foreground color
    lineHeight: '1.5',
  },
  lightText: {
    fontFamily: fonts.light,
    fontSize: '16px',
    color: '#717182', // --muted-foreground color
    fontWeight: 300,
    lineHeight: '1.6',
  },
  boldText: {
    fontFamily: fonts.sans,
    fontWeight: 700,
    fontSize: '24px',
    color: '#0f172a',
  },
  sectionTitle: {
    fontFamily: fonts.sans,
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '24px',
    lineHeight: '1.2',
  },
  primaryButton: {
    backgroundColor: '#0d9488', // --primary color
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.2s ease',
  },
};
