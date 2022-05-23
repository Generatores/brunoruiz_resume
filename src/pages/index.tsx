import type { NextPage } from "next";
import Image from "next/image";

import BrunoPhoto from "assets/bruno_ruiz_photo.jpg";

const Home: NextPage = () => {
  return (
    <div className="Body">
      <h2>Bruno Ruiz</h2>
      <div className="MainPhoto">
        <Image src={BrunoPhoto} alt="Bruno Ruiz Photo" />
      </div>
      <h3>Who am I?</h3>
      <p>My name is Bruno Ruiz, Mechanical Engineer with an EMBA</p>
    </div>
  );
};

export default Home;
