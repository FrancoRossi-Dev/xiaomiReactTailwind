function ChangeTheme() {
  function handleThemeChange() {
    const html = document.documentElement;
    html.dataset.theme = html.dataset.theme === 'light' ? 'dark' : 'light';
  }

  return (
    <button
      onClick={handleThemeChange}
      className='px-4 py-2 rounded bg-primary text-bg font-bold transition-colors hover:bg-accent'>
      t
    </button>
  );
}

export default ChangeTheme;
