import "./about.css";

export const About = () => {
  return (
    <div className="abouts">
      <div className="about">
        <h1 className="title">About Me</h1>
        <p className="title">
          Hello Nama Saya Dani!. Saya Seorang siswa dari sekolah SMK Negeri 1
          geger, saya seorang web developer antusias.
        </p>
      </div>
      <div className="medsos">
        <a href="https://github.com/YoYic54" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/danipinion57/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://danipinion.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-solid fa-globe"></i>
        </a>
      </div>
    </div>
  );
};
