import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'N/A',
    href: 'N/A',
  },
  {
    social: 'email',
    link: 'mukhopadhyaypushan42@gmail.com',
    href: 'mailto:mukhopadhyaypushan42@gmail.com',
  },
  {
    social: 'github',
    link: 'Godse-07',
    href: 'https://github.com/Godse-07',
  },
  {
    social: 'linkedin',
    link: 'Pushan Mukhopadhyay',
    href: 'https://www.linkedin.com/in/pushan-mukhopadhyay-2b326a243/',
  },
  {
    social: 'twitter',
    link: 'i_am_pushan',
    href: 'https://x.com/i_am_pushan',
  },
  {
    social: 'leetcode',
    link: 'Godse-07',
    href: 'https://leetcode.com/Godse-07/',
  },
  {
    social: 'instagram',
    link: 'i_am_pushan01',
    href: 'https://www.instagram.com/i_am_pushan01/',
  },
  {
    social: 'medium',
    link: 'mukhopadhyaypushan42',
    href: 'https://medium.com/@mukhopadhyaypushan42',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code} style={{ borderRadius: '15%' }}>
      <p className={styles.line}>
        <span className={styles.className} style={{color: "#f3de8a"}}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;