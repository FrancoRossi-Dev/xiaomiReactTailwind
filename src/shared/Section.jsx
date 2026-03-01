export default function Section({
  id,
  className = "",
  contentClassName = "",
  bgIMG = null,
  children,
}) {
  const sectionClassName =
    `px-6 py-12 md:px-12 ${bgIMG ? "bg-cover bg-center" : ""} ${className}`.trim();
  const sectionStyle = bgIMG ? { backgroundImage: `url(${bgIMG})` } : {};

  return (
    <section id={id} className={sectionClassName} style={sectionStyle}>
      <div
        className={`m-auto mb-8 max-w-120 md:max-w-200 lg:max-w-310 ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
