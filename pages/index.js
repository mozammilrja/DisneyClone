import { getSession, useSession } from "next-auth/react";
import React,{ useEffect} from "react"
import Head from "next/head";
import axios from "axios";
import Brands from "../components/Brands";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import requests from '../utils/request'
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import Search from "../components/Search";


export default function Home({results}) {

  useEffect(() => {
    window.scrollTo(200, 400);
}, [])
  const { data: session, status } = useSession()
  return (
    <div>
      <Head>
        <title>
          Disney+ | The streaming home of Disney, Pixar, Marvel, Star Wars, Nat
          Geo and Star
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
     <div>
      <Navbar/>
     <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider />
          <Brands />
          <Search />
          <Results results={results} />
        </main>
     </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
}`
    ).then((res) => res.json())

  return {
    props: {
      session,
      results: request.results,
    },
  };
}