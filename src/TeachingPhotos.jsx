import schoolGroup from '../images/teaching/school-group-1280.webp';
import schoolGroupSmall from '../images/teaching/school-group-640.webp';
import outside from '../images/teaching/outside-the-classroom-1280.webp';
import outsideSmall from '../images/teaching/outside-the-classroom-640.webp';
import lab from '../images/teaching/computer-lab-1280.webp';
import labSmall from '../images/teaching/computer-lab-640.webp';
import presentation from '../images/teaching/student-presentation-1280.webp';
import presentationSmall from '../images/teaching/student-presentation-640.webp';
import teachersDay from '../images/teaching/teachers-day-in-class-1280.webp';
import teachersDaySmall from '../images/teaching/teachers-day-in-class-640.webp';

const photos = {
  cover: {
    src: schoolGroup, small: schoolGroupSmall, width: 1280, height: 960,
    alt: 'A group of students in school uniforms posing with their teacher outside the school building.',
    caption: 'Together at school.',
  },
  outside: {
    src: outside, small: outsideSmall, width: 1280, height: 960,
    alt: 'A group sharing a playful pose beside a pond, with a temple in the background.',
    caption: 'A moment together outside the classroom.',
  },
  lab: {
    src: lab, small: labSmall, width: 1125, height: 1500,
    alt: 'Students gathered around a teacher and a desktop computer in the school computer lab.',
    caption: 'Working together in the computer lab.',
  },
  presentation: {
    src: presentation, small: presentationSmall, width: 1280, height: 960,
    alt: 'Two students presenting to classmates, with a slide about information technology in agriculture.',
    caption: 'Students sharing their work with classmates.',
  },
  teachersDay: {
    src: teachersDay, small: teachersDaySmall, width: 1125, height: 1500,
    alt: 'A Teacher’s Day celebration in the classroom, with cake and balloons.',
    caption: 'Celebrating Teacher’s Day in the classroom.',
  },
};

export function TeachingPhoto({ name, eager = false, sizes }) {
  const photo = photos[name];
  const portrait = photo.height > photo.width;
  return <figure className={`story-photo${portrait ? ' story-photo-portrait' : ''}`}>
    <img
      src={photo.src}
      srcSet={`${photo.small} 640w, ${photo.src} ${photo.width}w`}
      sizes={sizes || (portrait ? '(max-width: 479px) calc(100vw - 24px), 440px' : '(max-width: 849px) calc(100vw - 24px), 826px')}
      width={photo.width}
      height={photo.height}
      alt={photo.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
    <figcaption>{photo.caption}</figcaption>
  </figure>;
}

export function TeachingSectionPhotos({ section }) {
  if (section === 'Finding my place at Shivapuri') {
    return <TeachingPhoto name="outside" />;
  }
  if (section === 'Learning by doing') {
    return <div className="story-photo-pair">
      <TeachingPhoto name="lab" sizes="(max-width: 575px) calc(100vw - 24px), 290px" />
      <TeachingPhoto name="presentation" sizes="(max-width: 575px) calc(100vw - 24px), 520px" />
    </div>;
  }
  if (section === 'What I took with me') {
    return <TeachingPhoto name="teachersDay" />;
  }
  return null;
}
