const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-primary rounded-full opacity-5 dark:opacity-10 animate-float"></div>
      <div className="absolute top-1/2 right-20 w-48 h-48 bg-gradient-secondary rounded-full opacity-5 dark:opacity-10 animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-gradient-primary rounded-full opacity-5 dark:opacity-10 animate-float" style={{ animationDelay: "4s" }}></div>
    </div>
  );
};

export default FloatingBackground;
