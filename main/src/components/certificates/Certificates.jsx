import "./Certificates.css";

const certificates = [
  {
    title: "Full-Stack Software Engineer",
    issuer: "TripleTen",
    year: "2025",
    image: "/Certificate-Software_Engineer.png",
    alt: "TripleTen Full-Stack Software Engineer Certificate",
  },
  {
    title: "Elements of AI",
    issuer: "University of Helsinki",
    year: "2026",
    image: "/Certificate-Elements_of_AI.png",
    alt: "University of Helsinki Elements of AI Certificate",
  },
  {
    title: "Python & FastAPI Internship",
    issuer: "XIRCLS",
    year: "2025",
    image: "/Certificate-Internship.png",
    alt: "XIRCLS Python & FastAPI Internship Certificate",
  },
];

export default function Certificates() {
  return (
    <div className="certBand">
      <div className="certBand__inner">
        <div className="certBand__head">
          <h2 className="certBand__title">Certificates</h2>
          <p className="certBand__subtitle">
            A couple of credentials that support my foundation and momentum.
          </p>
        </div>

        <div className="polaroidGrid">
          {certificates.map((c, i) => (
            <article
              key={`${c.title}-${c.issuer}`}
              className={`polaroidCard ${i === 0 ? "polaroidCard--left" : "polaroidCard--right"}`}
            >
              <div className="polaroidCard__photo">
                <img src={c.image} alt={c.alt} className="polaroidCard__img" />
              </div>

              {/* Polaroid caption area */}
              <div className="polaroidCard__caption">
                <div className="polaroidCard__handTitle">{c.title}</div>
                <div className="polaroidCard__meta">
                  {c.issuer} • {c.year}
                </div>

                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="polaroidCard__link"
                  >
                    View credential
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
