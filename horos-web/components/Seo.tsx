import Head from "next/head";

interface headProps {
  title: string;
}

export default function Seo(props: headProps) {
  const { title } = props;
  return (
    <Head>
      <link rel="shortcut icon" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />
      <link rel="icon" type="image/png" href="/logo.png" />
      <link rel="icon" type="image/png" href="/logo.png" />
      <title>{title} | Horos-Ocular, 완벽한 동영상 분석 솔루션.</title>
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
    </Head>
  );
}
