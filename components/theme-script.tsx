export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme');
              var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var shouldBeDark = theme === 'dark' || (!theme && systemDark);
              
              if (shouldBeDark) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {
              console.error('Theme script error:', e);
            }
          })();
        `,
      }}
    />
  )
}
