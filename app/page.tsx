'use client';

import ProgressCard from "./progress_bar";
import Timer from "./timer";
import BasicExample from "./punto1";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./punto4";

export default function Home() {
  return (
    <>
      <BasicExample />
      <ProgressCard />
      <Timer />
      <Formulario />
    </>
  );
}
