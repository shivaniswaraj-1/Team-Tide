import React from 'react';

const contentData = [
  {
    title: 'Meet Safely',
    text: 'Meet uses the same protections that Google uses to secure your information...',
    img: '/images/image2.webp',
    link: 'https://support.google.com/a/answer/7582940?hl=en',
    linkText: 'Learn more about security and compliance',
    imgLeft: false,
  },
  {
    title: 'Meet from anywhere',
    text: 'Get the whole crew together in Team TIde...',
    img: '/images/image3.webp',
    link: 'https://workspace.google.com/pricing.html',
    linkText: 'See plans and pricing for organization',
    imgLeft: true,
  },
  {
    title: 'Meet on any device',
    text: 'Invited guests can join an online video conference from their computer...',
    img: '/images/image4.webp',
    link: 'https://edu.google.com/chromebooks/overview/',
    linkText: 'Enable hybrid work with Chrome OS devices',
    imgLeft: false,
  },
  {
    title: 'Meet clearly',
    text: 'Team TIde adjusts to your network speed...',
    img: '/images/image5.webp',
    link: null,
    linkText: '',
    imgLeft: true,
  },
  {
    title: 'Meet with everyone',
    text: 'With live captions powered by Team TIde’s speech recognition...',
    img: '/images/image6.webp',
    link: 'https://support.google.com/meet/answer/7313544?hl=en',
    linkText: 'Learn more about accessibility features',
    imgLeft: false,
  }
];

const MidSection = () => {
  return (
    <>
      {contentData.map(({ title, text, img, link, linkText, imgLeft }, index) => (
        <section key={index} className="text-gray-600 body-font">
          <div className={`container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ${imgLeft ? 'flex-row-reverse' : ''}`}>
            <div className="lg:max-w-lg w-5/6 mb-10 md:mb-0">
              <img src={img} alt={title} className="object-cover object-center rounded" />
            </div>
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center px-5">
              <h1 className="text-3xl mb-10 font-medium text-gray-900">{title}</h1>
              <p className="mb-8 leading-relaxed text-lg text-gray-600">{text}</p>
              {link && (
                <a href={link} className="text-blue-600 font-semibold cursor-pointer">
                  {linkText}
                </a>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default MidSection;
