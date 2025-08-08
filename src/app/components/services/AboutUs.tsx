import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us – Your Trusted Website & SEO Experts</title>
        <meta
          name="description"
          content="Learn about our mission, expertise, and commitment to helping businesses thrive online with website development and SEO strategies."
        />
      </Head>

      <main className="bg-background text-foreground min-h-screen py-12">
        {/* Hero Section */}
        <section className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About Us – Your Trusted Website & SEO Experts
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            We are dedicated to empowering businesses with cutting-edge website
            development and SEO strategies.
          </p>
        </section>

        {/* Our Mission & Values */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission & Values</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to help businesses thrive online by delivering
            innovative and effective digital solutions. We value integrity,
            commitment, and excellence in every project.
          </p>
        </section>

        {/* Experience & Expertise */}
        <section className="bg-card text-card-foreground py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold mb-4">
              Experience & Expertise
            </h2>
            <p className="text-lg leading-relaxed">
              With years of industry experience, we excel in website
              development, SEO, and digital marketing. Our team stays ahead of
              the curve with the latest technologies and trends.
            </p>
          </div>
        </section>

        {/* Why Choose Us? */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
            <li>Proven success in driving online growth</li>
            <li>Tailored solutions to meet your unique needs</li>
            <li>Transparent communication and dedicated support</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Grow Your Business?
          </h2>
          <a
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-highlight text-background font-semibold transition duration-300 hover:bg-opacity-80"
          >
            Contact Us Today
          </a>
        </section>
      </main>
    </>
  );
};

export default About;
