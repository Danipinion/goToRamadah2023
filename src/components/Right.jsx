import React, { useEffect, useState } from "react";

export const Right = () => {
  const [text, setText] = useState(
    <span>
      Sebelum Ramadhan tiba, mari kita persiapkan diri dengan sebaik-baiknya
      untuk menyambut bulan yang penuh berkah ini. Mari kita benahi diri kita
      agar lebih siap untuk menjalankan ibadah puasa dengan baik. Selain itu,
      mari kita tingkatkan amal kebaikan kita dan memperbanyak doa, agar Allah
      SWT meridhai kita dan memberikan keberkahan dalam hidup kita. Mari kita
      jadikan Ramadhan kali ini sebagai momen untuk introspeksi diri,
      memperbaiki kekurangan, dan memperbanyak amal ibadah. Semoga Allah SWT
      memberikan kita kekuatan dan keberkahan di bulan yang mulia ini. Selamat
      menyambut Ramadhan!
    </span>
  );
  const [open, setOpen] = useState(false);
  const chText = () => {
    setText(
      <span>
        Selamat datang Ramadhan, bulan yang penuh berkah dan ampunan. Semoga
        kehadiranmu membawa keberkahan dan kebahagiaan bagi kita semua. Di bulan
        yang suci ini, marilah kita meningkatkan ibadah dan ketaqwaan kepada
        Allah SWT, serta memperbanyak amal kebaikan. Semoga kita dapat merasakan
        manfaat dan keberkahan dari puasa dan ibadah kita di bulan Ramadhan.
        Selamat menjalankan ibadah puasa dan selamat menikmati kelezatan
        hidangan berbuka. Taqabbalallahu minna wa minkum, semoga Allah menerima
        amalan kita semua. Amin.
      </span>
    );
    setOpen(true);
  };
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    // console.log(year);
    const difference = +new Date(`03/23/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div className="right">
      <div className="top">
        <h1>RAMADAN</h1>
        <h1 className="blue">KAREEM</h1>
      </div>
      <div className="center">
        <p>{text}</p>
      </div>
      <div className={timerComponents.length ? "countdown active" : ""}>
        {timerComponents.length ? (
          timerComponents
        ) : (
          <button
            className={!open ? "btn" : "btn hidden"}
            onClick={() => {
              chText();
            }}
          >
            See
          </button>
        )}
      </div>
      <div className="bottom">
        <p>Copyright &copy; 2023. All rights reserved.</p>
      </div>
    </div>
  );
};
