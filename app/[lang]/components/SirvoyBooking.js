'use client'
import Head from 'next/head';

const SirvoyBooking = () => {
  return (
    <>
      <Head>
        <script
          async
          data-form-id="bb003c2d64ddab68"
          src="https://secured.sirvoy.com/widget/sirvoy.js"
        ></script>
         <style>{`
        body {
          font-family: 'Arial', sans-serif;
        }
        * {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      </Head>
    </>
  );
};

export default SirvoyBooking;
