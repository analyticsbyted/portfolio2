function PageTitle({ children }) {
  return (
    <h1 className="text-3xl font-bold mb-6 text-center text-foreground dark:text-white pb-2 leading-normal">{children}</h1>
  );
}

export default PageTitle;