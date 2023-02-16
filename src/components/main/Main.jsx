import React from "react";
import { Layout } from "../layout/Layout";
import { Header } from "../header/Header";

export const Main = ({ children }) => {
  return (
    <>
      <Header />
      <Layout>{children}</Layout>
    </>
  );
};
