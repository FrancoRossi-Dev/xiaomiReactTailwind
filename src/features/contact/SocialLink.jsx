function SocialLink({ svg, url, label }) {
  const altText = `Logo de ${label}`;

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='
        group
        inline-block
        w-20
        text-center
        text-sm
        opacity-30
        transition-opacity
        duration-300
        hover:opacity-100
      '>
      <img
        src={svg}
        alt={altText}
        className='
          w-12
          mx-auto
          mb-2
          transition-transform
          duration-300
          group-hover:scale-105
        '
      />

      <span
        className='
          block
          transition-colors
          duration-300
          group-hover:text-text
          group-focus:text-text
        '>
        {label}
      </span>
    </a>
  );
}

export default SocialLink;
