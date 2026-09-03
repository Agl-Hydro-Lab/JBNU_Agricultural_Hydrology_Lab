"use client";

import { type MouseEvent, useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CloudRain,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Mountain,
  Phone,
  Satellite,
  X,
} from "lucide-react";

const navigation = [
  { label: "About", href: "#about", target: "about-content" },
  { label: "Research", href: "#research", target: "research-content" },
  { label: "Professor", href: "#professor", target: "professor-content" },
  { label: "Projects", href: "#projects", target: "projects-content" },
  { label: "Papers", href: "#publications", target: "publications-content" },
  { label: "People", href: "#people", target: "people-content" },
  { label: "Contact", href: "#contact", target: "contact-content" },
];

const researchAreas = [
  {
    number: "01",
    icon: BrainCircuit,
    title: "수문 및 환경모델링",
    english: "Hydrology & Environmental Modeling",
    description:
      "수문 순환과 환경 변화를 물리 기반 모형과 데이터 기반 기법으로 해석합니다.",
  },
  {
    number: "02",
    icon: CloudRain,
    title: "기후·토지이용 변화 영향",
    english: "Climate & Land-use Change",
    description:
      "기후와 토지이용의 변화가 유출·토양수분 등 수문학적 과정에 미치는 영향을 분석합니다.",
  },
  {
    number: "03",
    icon: Mountain,
    title: "농업 토양침식 및 유사이송",
    english: "Soil Erosion & Sediment",
    description:
      "농업활동에 따른 토양침식과 유사 생산·이송 과정을 정량적으로 해석합니다.",
  },
  {
    number: "04",
    icon: Satellite,
    title: "AI·위성 기반 자연재해 예측",
    english: "AI & Satellite Analytics",
    description:
      "인공지능과 인공위성 데이터를 활용해 가뭄 등 자연재해를 평가하고 예측합니다.",
  },
];

const expertise = [
  "수문 및 환경모델링",
  "기후·토지이용 변화",
  "토양침식 및 유사이송",
  "AI·위성 기반 재해예측",
];

const members = [
  { name: "이정", role: "석사", english: "M.S. Student" },
  { name: "김대영", role: "학부연구생", english: "Undergraduate Researcher" },
  { name: "백의찬", role: "학부연구생", english: "Undergraduate Researcher" },
  { name: "gkgkgkkg하재진", role: "학부연구생", english: "Undergraduate Researcher" },
];

const researchProjects = [
  {
    period: "2026–2028",
    sponsor: "한국연구재단 · 신진연구",
    title: "저수지 가뭄 반응 유형화 및 수문 연쇄 반응 규명을 통한 지식주입형 AI 기반 예경보 시스템 개발",
  },
  {
    period: "2026–2030",
    sponsor: "한국환경산업기술원",
    title: "홍수 피해 저감을 위한 댐 동적 운영 기술 개발",
  },
  {
    period: "2026–2030",
    sponsor: "한국환경산업기술원",
    title: "토양기반 탄소흡수기술 통합영향평가 모델 개발",
  },
  {
    period: "2025–2027",
    sponsor: "한국농어촌공사",
    title: "농업용수 수요·공급량 실태조사 용역 — 낙동강·영섬권역",
  },
  {
    period: "2025–2029",
    sponsor: "농림식품기술기획평가원",
    title: "저수지 홍수범람 예측 및 D.N.A. 기반 최적 스마트 운영관리 플랫폼 개발",
  },
];

const publications = [
  {
    year: "2026",
    journal: "Environmental Modelling & Software · 198, 106899",
    title: "Advancing Water Level Prediction Using Clustering-based Machine Learning Techniques in Data-Scarce Regions",
    authors: "Lee, S. & Jang, T.",
    doi: "https://doi.org/10.1016/j.envsoft.2026.106899",
  },
  {
    year: "2025",
    journal: "Water Resources Research · 61(11), e2024WR039744",
    title: "Large-scale drought forecasting in the U.S. Southern Plains through a hybrid cluster-based Wavelet-Machine learning approach",
    authors: "Lee, S., Danandeh Mehr, A., Moriasi, D. & Mirchi, A.",
  },
  {
    year: "2025",
    journal: "Scientific Reports · 15, 15135",
    title: "Increasing frequency and spatial extent of cattle heat stress conditions in the Southern Plains of the USA",
    authors: "Lee, S., Moriasi, D., Cibils, A. & Barker, P.",
    doi: "https://doi.org/10.1038/s41598-025-99621-5",
  },
  {
    year: "2025",
    journal: "Journal of Environmental Quality · 54(1), 147–159",
    title: "Modeling the impacts of measured and projected climate and management systems on agricultural fields: Surface runoff, soil moisture, and soil erosion",
    authors: "Lee, S. et al.",
    doi: "https://doi.org/10.1002/jeq2.20565",
  },
  {
    year: "2024",
    journal: "Journal of Hydrometeorology · 25(12), 1809–1822",
    title: "Wavelet-entropy enhanced clustering: A comprehensive analysis of drought patterns in the Southern Plains, USA",
    authors: "Lee, S., Nourani, V., Danandeh Mehr, A., Moriasi, D. & Mirchi, A.",
    doi: "https://doi.org/10.1175/JHM-D-24-0041.1",
  },
  {
    year: "2024",
    journal: "Journal of Hydrology: Regional Studies · 53, 101761",
    title: "Sensitivity of Standardized Precipitation and Evapotranspiration Index (SPEI) to the choice of SPEI probability distribution and evapotranspiration method",
    authors: "Lee, S., Moriasi, D., Danandeh Mehr, A. & Mirchi, A.",
    doi: "https://doi.org/10.1016/j.ejrh.2024.101761",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    const sections = ["home", "about", "research", "professor", "projects", "publications", "people", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    target: string,
  ) => {
    event.preventDefault();
    closeMenu();
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", href);
  };

  return (
    <main>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="홈으로 이동">
          <span className="university-logo-wrap">
            <img className="university-logo" src="/jbnu-signature-blue.png" alt="전북대학교" />
          </span>
          <span className="brand-copy">
            <strong>Agricultural Hydrology Lab</strong>
            <small>농업수문학연구실</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigation.map((item) => (
            <a
              key={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
              href={item.href}
              onClick={(event) => handleNavigation(event, item.href, item.target)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-label="모바일 메뉴">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(event) => handleNavigation(event, item.href, item.target)}
          >
            {item.label}
            <ArrowUpRight size={18} />
          </a>
        ))}
      </nav>

      <section className="hero section-dark" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">JEONBUK NATIONAL UNIVERSITY · 농업수문학연구실</p>
            <h1>
              Water systems,
              <br />
              <span>understood.</span>
            </h1>
            <p className="hero-description">
              기후와 토지이용 변화가 물순환에 미치는 영향을 분석하고,
              <br className="desktop-break" /> 지속가능한 유역관리의 해답을 연구합니다.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                연구 분야 보기 <ArrowDown size={17} />
              </a>
              <a className="text-link" href="#contact">
                연구실 문의 <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="hydro-system" aria-label="기후, 유역, 모델, 의사결정으로 이어지는 수문 시스템 개념도">
            <div className="system-head">
              <span>HYDROLOGIC SYSTEMS</span>
              <span className="live-dot">RESEARCH FRAME</span>
            </div>
            <svg viewBox="0 0 540 440" role="img" aria-hidden="true">
              <defs>
                <linearGradient id="river" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#91e5ff" />
                  <stop offset="1" stopColor="#2ea0ff" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path className="contour" d="M16 94C97 36 188 38 251 88c75 60 121 20 195-12 34-15 62-9 78 3" />
              <path className="contour" d="M-6 146c87-52 164-50 237-4 77 49 131 35 205-6 38-21 72-21 112 8" />
              <path className="contour" d="M6 208c79-51 164-35 230 9 72 48 136 39 205-5 39-24 68-19 107 6" />
              <path className="contour" d="M-13 276c92-54 178-29 245 14 67 43 130 40 199 0 49-28 79-26 121 4" />
              <path className="contour" d="M-4 345c80-40 169-25 240 12 71 38 137 40 204 4 43-23 77-24 112-3" />
              <path className="flow-line" d="M75 100C123 150 142 166 204 196c60 29 77 71 108 102 34 34 74 53 151 81" />
              <path className="tributary" d="M179 83c-5 53 5 79 36 118" />
              <path className="tributary" d="M355 152c-49 43-72 85-43 146" />
              <circle className="node pulse" cx="76" cy="100" r="8" />
              <circle className="node" cx="206" cy="196" r="7" />
              <circle className="node" cx="313" cy="298" r="8" />
              <circle className="node pulse delay" cx="464" cy="379" r="9" />
            </svg>
            <div className="system-label label-climate">
              <CloudRain size={16} /> <span>CLIMATE</span>
            </div>
            <div className="system-label label-basin">
              <Mountain size={16} /> <span>BASIN</span>
            </div>
            <div className="system-label label-model">
              <BrainCircuit size={16} /> <span>MODEL</span>
            </div>
            <div className="system-label label-decision">
              <span>DECISION</span> <ArrowUpRight size={15} />
            </div>
          </div>
        </div>

        <div className="focus-strip" aria-label="핵심 연구 키워드">
          <span>Climate</span>
          <i />
          <span>AI &amp; Data</span>
          <i />
          <span>Remote Sensing</span>
          <i />
          <span>Hydrologic Modeling</span>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section-index">01 / ABOUT</div>
        <div className="about-layout nav-target" id="about-content">
          <div>
            <p className="kicker">OUR PURPOSE</p>
            <h2>변화하는 물환경을 읽고,<br />더 나은 적응을 설계합니다.</h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              농업수문학연구실은 기후변화와 토지이용 변화에 따른 수문학적 영향을 평가하고,
              지속가능한 유역관리 체계와 수자원 통합 시스템을 구축하는 것을 목표로 합니다.
            </p>
            <p>
              기존 수문모형의 한계를 진단하고 데이터 및 물리 기반 기술을 결합해,
              환경 개선과 농촌 발전에 활용할 수 있는 향상된 모델링 기법을 개발합니다.
            </p>
          </div>
        </div>

        <div className="process-grid">
          {[
            ["OBSERVE", "관측", "기후·위성·공간자료를 수집하고 현상을 관찰합니다."],
            ["MODEL", "모델링", "물리 과정과 데이터 패턴을 연결해 시스템을 재현합니다."],
            ["PREDICT", "예측", "가뭄과 수문환경 변화를 정량적으로 전망합니다."],
            ["ADAPT", "적응", "지속가능한 농업과 유역관리 전략을 제안합니다."],
          ].map(([tag, title, description], index) => (
            <article className="process-item" key={tag}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{tag}</p>
              <h3>{title}</h3>
              <small>{description}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft" id="research">
        <div className="section-index">02 / RESEARCH</div>
        <div className="section-heading nav-target" id="research-content">
          <div>
            <p className="kicker">RESEARCH AREAS</p>
            <h2>From data to decisions.</h2>
          </div>
          <p>
            관측자료에서 의미 있는 패턴을 찾고, 모델을 통해 미래를 예측하며,
            현장에 적용 가능한 대응 전략으로 연결합니다.
          </p>
        </div>

        <div className="research-grid">
          {researchAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article className="research-card" key={area.number}>
                <div className="card-top">
                  <span>{area.number}</span>
                  <Icon size={24} strokeWidth={1.6} />
                </div>
                <p className="card-english">{area.english}</p>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="card-line" />
              </article>
            );
          })}
        </div>
      </section>

      <section className="section professor" id="professor">
        <div className="section-index">03 / PROFESSOR</div>

        <div className="professor-heading nav-target" id="professor-content">
          <div>
            <p className="kicker">PRINCIPAL INVESTIGATOR</p>
            <h2>이상현 교수</h2>
            <p className="professor-name">Sanghyun Lee, Ph.D.</p>
          </div>
          <p className="professor-lead">
            데이터와 물리 기반 접근을 연결하여 기후·토지이용 변화가 수문환경에 미치는
            영향을 밝히고, 농업과 유역을 위한 지속가능한 해결책을 연구합니다.
          </p>
        </div>

        <div className="professor-profile" id="professor-profile">
          <figure className="professor-portrait">
            <img
              src="/professor-sanghyun-lee.png"
              alt="이상현 교수"
            />
            <figcaption>
              <span>ASSISTANT PROFESSOR</span>
              <strong>Jeonbuk National University</strong>
            </figcaption>
          </figure>

          <div className="professor-information">
            <div className="profile-facts">
              <div>
                <span>RESEARCH FIELD</span>
                <strong>수문 및 환경모델링</strong>
              </div>
              <div>
                <span>COURSES</span>
                <strong>수문학 · 농업통계학 · 지역컴퓨터프로그래밍</strong>
              </div>
              <div>
                <span>OFFICE</span>
                <strong>농업생명과학대학 본관 224호</strong>
              </div>
            </div>

            <div className="professor-history">
              <article>
                <GraduationCap size={22} strokeWidth={1.6} />
                <div>
                  <p>EDUCATION</p>
                  <h3>University of Illinois at Urbana-Champaign</h3>
                  <span>박사 · 석사</span>
                  <span>단국대학교 토목환경공학과 학사</span>
                </div>
              </article>
              <article>
                <BriefcaseBusiness size={22} strokeWidth={1.6} />
                <div>
                  <p>EXPERIENCE</p>
                  <h3>전북대학교 지역건설공학과 교수</h3>
                  <span>2025.03 – 현재</span>
                  <span>USDA-ARS 박사후연구원 · 2023–2025</span>
                </div>
              </article>
            </div>

            <div className="professor-links">
              <a href="mailto:sanghyun.lee@jbnu.ac.kr" className="mail-link">
                sanghyun.lee@jbnu.ac.kr <ArrowUpRight size={17} />
              </a>
              <a
                className="profile-link"
                href="https://agrieng.jbnu.ac.kr/jbnuProfl/agrieng/60/7684/artclView.do"
                target="_blank"
                rel="noreferrer"
              >
                공식 프로필 보기 <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="expertise-row">
          <span>Research expertise</span>
          <div>
            {expertise.map((item) => <em key={item}>{item}</em>)}
          </div>
        </div>
      </section>

      <section className="section projects section-dark" id="projects">
        <div className="section-index section-index-light">04 / PROJECTS</div>
        <div className="projects-heading nav-target" id="projects-content">
          <div>
            <p className="kicker kicker-light">CURRENT RESEARCH PROJECTS</p>
            <h2>Research in action.</h2>
          </div>
          <p>
            가뭄 예경보부터 댐 운영, 농업용수와 탄소흡수기술까지
            실제 수자원 문제를 해결하기 위한 연구를 수행하고 있습니다.
          </p>
        </div>

        <div className="projects-list">
          {researchProjects.map((project, index) => (
            <article className="project-item" key={project.title}>
              <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p>{project.sponsor}</p>
                <h3>{project.title}</h3>
              </div>
              <strong>{project.period}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section publications" id="publications">
        <div className="section-index">05 / PUBLICATIONS</div>
        <div className="publications-heading nav-target" id="publications-content">
          <div>
            <p className="kicker">SELECTED PUBLICATIONS</p>
            <h2>Recent papers.</h2>
          </div>
          <div className="publications-intro">
            <p>수문모델링, 가뭄 예측, 기후변화와 농업환경을 다룬 최근 연구입니다.</p>
            <a
              href="https://agrieng.jbnu.ac.kr/jbnuProfl/agrieng/60/7684/artclView.do"
              target="_blank"
              rel="noreferrer"
              className="mail-link"
            >
              전체 연구실적 보기 <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="publications-grid">
          {publications.map((publication, index) => (
            <article className="publication-card" key={publication.title}>
              <div className="publication-topline">
                <strong>{publication.year}</strong>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="publication-journal">{publication.journal}</p>
              <h3>{publication.title}</h3>
              <p className="publication-authors">{publication.authors}</p>
              {publication.doi && (
                <a href={publication.doi} target="_blank" rel="noreferrer">
                  DOI <ArrowUpRight size={15} />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft people" id="people">
        <div className="section-index">06 / PEOPLE</div>
        <div className="people-heading nav-target" id="people-content">
          <div>
            <p className="kicker">LAB MEMBERS</p>
            <h2>People behind<br />the research.</h2>
          </div>
          <p>
            서로 다른 관점과 기술을 연결해 물환경의 변화를 이해하고,
            현장에 필요한 답을 함께 찾아갑니다.
          </p>
        </div>

        <div className="members-grid">
          {members.map((member, index) => (
            <article className="member-card" key={member.name}>
              <div className="member-image-loading" aria-label={`${member.name} 사진 준비 중`}>
                <span className="loading-orbit" aria-hidden="true" />
                <small>IMAGE LOADING</small>
                <em>{String(index + 1).padStart(2, "0")}</em>
              </div>
              <div className="member-info">
                <div>
                  <span>{member.english}</span>
                  <h3>{member.name}</h3>
                </div>
                <strong>{member.role}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-dark" id="contact">
        <div className="contact-grid" aria-hidden="true" />
        <div className="contact-content nav-target" id="contact-content">
          <div>
            <p className="kicker kicker-light">CONTACT</p>
            <h2>Let&apos;s connect<br />through water.</h2>
          </div>
          <div className="contact-details">
            <a href="mailto:sanghyun.lee@jbnu.ac.kr">
              <Mail size={20} />
              <span><small>EMAIL</small>sanghyun.lee@jbnu.ac.kr</span>
              <ArrowUpRight size={19} />
            </a>
            <a href="tel:+82632702522">
              <Phone size={20} />
              <span><small>PHONE</small>063-270-2522</span>
              <ArrowUpRight size={19} />
            </a>
            <div>
              <MapPin size={20} />
              <span><small>ADDRESS</small>전북특별자치도 전주시 덕진구 백제대로 567<br />농업생명과학대학 본관 224호</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#home">
          <span className="university-logo-wrap">
            <img className="university-logo" src="/jbnu-signature-blue.png" alt="전북대학교" />
          </span>
          <span className="brand-copy">
            <strong>농업수문학연구실</strong>
            <small>Agricultural Hydrology Lab</small>
          </span>
        </a>
        <p>© 2026 Agricultural Hydrology Laboratory. All rights reserved.</p>
        <a href="https://agrieng.jbnu.ac.kr/agrieng/32410/subview.do" target="_blank" rel="noreferrer">
          Department page <ArrowUpRight size={14} />
        </a>
      </footer>
    </main>
  );
}
