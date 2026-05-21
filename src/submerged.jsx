// Direction 2 — Submerged: cinematic dark theatrical.
// Inky black bg, cyan glow, big bold modern display type, ambient waves,
// Hadestown/Wicked website energy.

const Submerged = () => {
  const c = window.VOICE_CONTENT;
  const [playing, setPlaying] = React.useState(false);
  const [track, setTrack] = React.useState(0);

  const ink = '#070d14';
  const ink2 = '#0e1a26';
  const cream = '#f0e6cf';
  const cyan = '#5fd4e8';
  const teal = '#1f8fb0';
  const glow = '#84e8f8';

  const display = '"Fraunces", "Playfair Display", Georgia, serif';
  const wordmark = '"Cinzel", "Trajan Pro", "Cormorant Garamond", Georgia, serif';
  const sans = '"Inter Tight", "Inter", system-ui, sans-serif';

  return (
    <div style={{
      width: '100%',
      background: ink,
      color: cream,
      fontFamily: sans,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background atmospherics — caustic light pools */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background:
          `radial-gradient(circle at 20% 10%, ${teal}22, transparent 35%),
           radial-gradient(circle at 80% 30%, ${cyan}1a, transparent 40%),
           radial-gradient(circle at 50% 70%, ${teal}1f, transparent 50%)`,
      }} />

      {/* ── NAV ─────────────────────────────────────── */}
      <nav style={{
        position: 'relative', zIndex: 5,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '24px 56px',
      }}>
        <div style={{
          fontFamily: wordmark, fontWeight: 500, fontSize: 22,
          letterSpacing: '0.08em', color: cream,
        }}>
          VOICE<span style={{ color: cyan }}>.</span>
        </div>
        <ul style={{ display: 'flex', gap: 40, listStyle: 'none', margin: 0, padding: 0, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
          {['Story','Cast','Listen','Team','Press'].map(x => (
            <li key={x} style={{ opacity: 0.7 }}>{x}</li>
          ))}
        </ul>
        <button style={{
          padding: '10px 22px', borderRadius: 999,
          background: cyan, color: ink, border: 'none',
          fontSize: 11, letterSpacing: '0.28em', fontWeight: 600,
          textTransform: 'uppercase', cursor: 'pointer',
          boxShadow: `0 0 30px ${cyan}66`,
        }}>Industry Access</button>
      </nav>

      {/* ── HERO ────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: '40px 56px 100px', minHeight: 900, overflow: 'hidden' }}>
        {/* poster on right, faded */}
        <div style={{
          position: 'absolute', right: -100, top: 40, width: 820, height: 820,
          opacity: 0.55,
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
          zIndex: 1, pointerEvents: 'none',
        }}>
          <img src="assets/poster.png" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: `hue-rotate(-5deg) saturate(1.2) drop-shadow(0 0 60px ${cyan}66)` }} alt="" />
        </div>

        {/* ambient wave SVG */}
        <svg style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 200, opacity: 0.25, pointerEvents: 'none', zIndex: 1 }} viewBox="0 0 1280 200" preserveAspectRatio="none">
          <path d="M0 120 Q160 60 320 100 T640 100 T960 100 T1280 100 L1280 200 L0 200 Z" fill={teal} />
          <path d="M0 140 Q160 100 320 130 T640 130 T960 130 T1280 130 L1280 200 L0 200 Z" fill={cyan} opacity="0.4" />
        </svg>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 700, paddingTop: 80 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '6px 14px', borderRadius: 999,
            border: `1px solid ${cyan}66`, background: `${cyan}10`,
            fontSize: 10, letterSpacing: '0.3em', color: cyan,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: cyan, boxShadow: `0 0 10px ${cyan}` }} />
            FESTIVAL WORKSHOP · AMDA SUMMERFEST 2026
          </div>

          <h1 style={{
            fontFamily: wordmark, fontWeight: 500,
            fontSize: 260, lineHeight: 0.9, letterSpacing: '0.01em',
            margin: '32px 0 0', color: cream,
            textShadow: `0 0 80px ${cyan}33`,
          }}>
            VOICE<span style={{ color: cyan }}>.</span>
          </h1>

          <div style={{ fontFamily: display, fontStyle: 'italic', fontSize: 36, marginTop: 28, lineHeight: 1.2, color: cream, opacity: 0.9, maxWidth: 640 }}>
            A young woman refuses to trade her truth for a fairytale ending.
          </div>

          <div style={{ fontSize: 14, letterSpacing: '0.3em', opacity: 0.55, marginTop: 24, textTransform: 'uppercase' }}>
            The Little Mermaid · Turned Inside Out
          </div>

          <div style={{ marginTop: 56, display: 'flex', gap: 14 }}>
            <a href="#listen" style={{
              padding: '16px 32px', borderRadius: 999,
              background: cyan, color: ink, border: 'none', textDecoration: 'none',
              fontSize: 12, letterSpacing: '0.25em', fontWeight: 700, textTransform: 'uppercase',
              cursor: 'pointer', boxShadow: `0 0 40px ${cyan}55`,
            }}>▶ &nbsp;Hear the Music</a>
            <a href="#story" style={{
              padding: '16px 32px', borderRadius: 999,
              background: 'transparent', color: cream, border: `1px solid ${cream}66`, textDecoration: 'none',
              fontSize: 12, letterSpacing: '0.25em', fontWeight: 600, textTransform: 'uppercase',
              cursor: 'pointer',
            }}>Read the Story ↓</a>
          </div>

          <div style={{ marginTop: 60, fontSize: 11, letterSpacing: '0.28em', opacity: 0.5, textTransform: 'uppercase' }}>
            Book by Zach Adam &amp; Eidan Lipper · Music &amp; Lyrics by Zach Adam
          </div>
        </div>

        {/* status callout */}
        <div style={{
          position: 'absolute', right: 56, bottom: 80,
          maxWidth: 360, padding: 24,
          background: `${ink2}dd`, backdropFilter: 'blur(20px)',
          border: `1px solid ${cyan}33`, borderRadius: 4,
          zIndex: 3,
        }}>
          <div style={{ fontSize: 10, letterSpacing: '0.35em', color: cyan, marginBottom: 10 }}>↳ STATUS</div>
          <div style={{ fontFamily: display, fontStyle: 'italic', fontSize: 18, lineHeight: 1.4 }}>
            Festival workshop at <span style={{ color: cyan }}>AMDA Summerfest 2026</span>. Recently presented in concert featuring <span style={{ color: cyan }}>Bonnie Milligan</span> &amp; <span style={{ color: cyan }}>Donald Webber Jr.</span>
          </div>
        </div>
      </section>

      {/* ── SYNOPSIS ───────────────────────────────── */}
      <section id="story" style={{ padding: '120px 56px', position: 'relative' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '280px 1fr', gap: 80 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.35em', color: cyan, textTransform: 'uppercase' }}>01 / Story</div>
            <h2 style={{
              fontFamily: display, fontStyle: 'italic', fontWeight: 300,
              fontSize: 72, lineHeight: 0.95, margin: '20px 0 0',
            }}>
              The<br/>Synopsis
            </h2>
            <div style={{ marginTop: 40 }}>
              <div style={{ fontSize: 10, letterSpacing: '0.35em', opacity: 0.5, marginBottom: 12 }}>THEMES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.themes.map(t => (
                  <div key={t} style={{
                    padding: '8px 14px', border: `1px solid ${cyan}44`, borderRadius: 999,
                    fontSize: 12, letterSpacing: '0.1em', display: 'inline-block', alignSelf: 'flex-start',
                  }}>{t}</div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ fontSize: 19, lineHeight: 1.75, color: '#d8d0bb' }}>
            <p style={{ margin: 0, fontFamily: display, fontStyle: 'italic', fontSize: 28, color: cream, lineHeight: 1.35, marginBottom: 32 }}>
              {c.synopsisShort}
            </p>
            {c.synopsisFull.slice(3).map((p, i) => (
              <p key={i} style={{ margin: '0 0 18px' }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHARACTERS ─────────────────────────────── */}
      <section style={{ padding: '120px 56px', background: ink2, position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `radial-gradient(circle at 70% 20%, ${teal}22, transparent 50%)`,
        }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.35em', color: cyan, textTransform: 'uppercase' }}>02 / Cast</div>
              <h2 style={{
                fontFamily: display, fontStyle: 'italic', fontWeight: 300,
                fontSize: 80, lineHeight: 0.95, margin: '20px 0 0',
              }}>
                Two Worlds, <span style={{ color: cyan }}>One Voice.</span>
              </h2>
            </div>
            <div style={{ maxWidth: 360, fontSize: 14, lineHeight: 1.5, opacity: 0.7 }}>
              Each performer plays a role in Gabi's real world and a mirror role in the fairytale she invents.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {c.characters.map((ch, i) => (
              <div key={i} style={{
                padding: 24, background: `${ink}99`,
                border: `1px solid ${cream}10`,
                borderRadius: 4,
                position: 'relative', overflow: 'hidden',
              }}>
                {/* faint number watermark */}
                <div style={{
                  position: 'absolute', top: -20, right: -8,
                  fontFamily: display, fontStyle: 'italic', fontSize: 140, lineHeight: 1,
                  color: cyan, opacity: 0.08,
                }}>{String(i + 1).padStart(2, '0')}</div>

                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${cyan}, ${teal})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: display, fontStyle: 'italic', fontSize: 28, color: ink,
                  marginBottom: 18, position: 'relative', zIndex: 1,
                }}>{ch.name.charAt(0)}</div>

                <div style={{ fontFamily: display, fontStyle: 'italic', fontSize: 26, lineHeight: 1.05, position: 'relative', zIndex: 1 }}>
                  {ch.name}
                </div>
                <div style={{ fontSize: 10, letterSpacing: '0.3em', color: cyan, marginTop: 8, textTransform: 'uppercase' }}>
                  ↳ {ch.alt}
                </div>
                <div style={{ fontSize: 11, letterSpacing: '0.15em', opacity: 0.6, marginTop: 8, textTransform: 'uppercase' }}>
                  {ch.age} · {ch.voice}
                </div>
                <p style={{ margin: '14px 0 0', fontSize: 13, lineHeight: 1.5, opacity: 0.78 }}>{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LISTEN ─────────────────────────────────── */}
      <section id="listen" style={{ padding: '120px 56px', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.35em', color: cyan, textTransform: 'uppercase' }}>03 / Listen</div>
            <h2 style={{
              fontFamily: display, fontStyle: 'italic', fontWeight: 300,
              fontSize: 80, lineHeight: 0.95, margin: '20px 0 0',
            }}>
              Demo <span style={{ color: cyan }}>Score.</span>
            </h2>
            <div style={{ marginTop: 16, fontSize: 16, opacity: 0.75, maxWidth: 620, lineHeight: 1.5 }}>
              <em style={{ fontFamily: display, fontSize: 18 }}>Wicked</em> meets <em style={{ fontFamily: display, fontSize: 18 }}>Dear Evan Hansen</em>, wrapped in a modern version of all of your favorite Disney musicals.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'stretch' }}>
            {/* Samply embed — left half */}
            <div style={{
              padding: 24,
              background: `linear-gradient(135deg, ${ink2}, ${ink})`,
              border: `1px solid ${cyan}33`, borderRadius: 12,
              boxShadow: `0 30px 80px rgba(0,0,0,0.4), 0 0 60px ${cyan}10`,
              position: 'relative',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                position: 'absolute', top: -10, left: 24,
                padding: '4px 12px', background: cyan, color: ink,
                fontSize: 9, letterSpacing: '0.3em', fontWeight: 700, textTransform: 'uppercase',
                borderRadius: 999,
              }}>↳ Listen to selections</div>
              <iframe
                src="https://samply.app/embed/e3779862-a1c4-41e4-b6af-239c591d925b?si=XRBv44e0C9ZWqsHOzOcgoj13qb92"
                frameBorder="0"
                allowtransparency="true"
                style={{
                  width: '100%', flex: 1, minHeight: 540, border: `1px solid ${cream}11`,
                  borderRadius: 8, marginTop: 8, display: 'block',
                }}
                title="Voice — Samply player"
              />
            </div>

            {/* Art on the right */}
            <div style={{
              position: 'relative', overflow: 'hidden',
              borderRadius: 12, border: `1px solid ${cyan}22`,
              background: ink2,
              minHeight: 580,
            }}>
              <img src="assets/wing-underwater.png" alt="" style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
              }} />
              {/* color grade to fit palette */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(180deg, ${ink}55 0%, transparent 30%, ${ink}aa 100%)`,
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at 50% 30%, transparent 30%, ${ink}66 80%)`,
                mixBlendMode: 'multiply',
              }} />
              {/* caption */}
              <div style={{
                position: 'absolute', left: 28, right: 28, bottom: 28,
                zIndex: 2,
              }}>
                <div style={{ fontSize: 10, letterSpacing: '0.35em', color: cyan, textTransform: 'uppercase', marginBottom: 10 }}>↳ The wing</div>
                <div style={{ fontFamily: display, fontStyle: 'italic', fontSize: 26, lineHeight: 1.25, color: cream }}>
                  "She sold her late mother's wing necklace to buy a man's suit — and a ticket to the Big City."
                </div>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: 28, display: 'flex', alignItems: 'center', gap: 16,
            fontSize: 11, letterSpacing: '0.28em', opacity: 0.55, textTransform: 'uppercase',
          }}>
            <span>↳ Full score &amp; libretto available by request</span>
            <span style={{ flex: 1, height: 1, background: `${cream}22` }} />
            <span style={{ color: cyan }}>Samply</span>
          </div>
        </div>
      </section>

      {/* ── CREATIVE TEAM ──────────────────────────── */}
      <section id="team" style={{ padding: '120px 56px', background: ink2 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.35em', color: cyan, textTransform: 'uppercase' }}>04 / Team</div>
            <h2 style={{
              fontFamily: display, fontStyle: 'italic', fontWeight: 300,
              fontSize: 80, lineHeight: 0.95, margin: '20px 0 0',
            }}>
              The <span style={{ color: cyan }}>Creators.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
            {c.creators.map((p, i) => (
              <div key={i} style={{
                padding: 32, background: `${ink}80`,
                border: `1px solid ${cream}10`, borderRadius: 6,
                display: 'grid', gridTemplateColumns: '150px 1fr', gap: 28, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 150, height: 200, overflow: 'hidden',
                  background: ink, position: 'relative',
                  boxShadow: `0 0 30px ${cyan}33`,
                  border: `1px solid ${cyan}33`,
                }}>
                  <img src={p.photo} alt={p.name} style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    filter: 'saturate(0.85) contrast(1.05)',
                  }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(180deg, transparent 55%, ${ink}66)`,
                    mixBlendMode: 'multiply',
                  }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h3 style={{
                    fontFamily: wordmark, fontWeight: 500, fontSize: 32,
                    margin: '0 0 8px', lineHeight: 1, letterSpacing: '0.04em',
                  }}>
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" style={{
                        color: 'inherit', textDecoration: 'none',
                        borderBottom: `1px solid ${cyan}66`,
                        paddingBottom: 2,
                        transition: 'border-color .15s, color .15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = cyan; e.currentTarget.style.borderBottomColor = cyan; }}
                      onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.borderBottomColor = `${cyan}66`; }}
                      >
                        {p.name.toUpperCase()}
                        <span style={{ fontSize: 14, marginLeft: 8, opacity: 0.7, letterSpacing: 0 }}>↗</span>
                      </a>
                    ) : (
                      p.name.toUpperCase()
                    )}
                  </h3>
                  <div style={{
                    fontSize: 10, letterSpacing: '0.25em', color: cyan,
                    textTransform: 'uppercase', marginBottom: 18,
                  }}>
                    {p.role}
                  </div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.7, opacity: 0.82 }}>
                    {p.bio.split('\n\n').map((para, j) => (
                      <p key={j} style={{ margin: '0 0 12px' }}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer style={{ padding: '120px 56px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* wing-necklace blended into the bottom */}
        <div style={{
          position: 'absolute', left: '50%', bottom: -120, transform: 'translateX(-50%)',
          width: 1200, maxWidth: '120%', pointerEvents: 'none',
          maskImage: 'radial-gradient(ellipse 60% 70% at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at center, black 30%, transparent 75%)',
          opacity: 0.55,
        }}>
          <img src="assets/wing-underwater.png" alt="" style={{
            width: '100%', display: 'block',
            mixBlendMode: 'screen',
            filter: 'saturate(0.9) brightness(0.95)',
          }} />
        </div>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `radial-gradient(ellipse at center, ${cyan}1a, transparent 60%)`,
        }} />

        <div style={{ position: 'relative' }}>
          <h2 style={{
            fontFamily: wordmark, fontWeight: 500,
            fontSize: 110, lineHeight: 1, letterSpacing: '0.02em',
            margin: 0,
          }}>
            LET HER BE <span style={{ color: cyan }}>HEARD.</span>
          </h2>
          <div style={{ marginTop: 28, fontFamily: display, fontStyle: 'italic', fontSize: 22, opacity: 0.8, maxWidth: 600, margin: '28px auto 0', lineHeight: 1.4 }}>
            For inquiries — get in touch.
          </div>
          <div style={{ marginTop: 40 }}>
            <a href="mailto:voiceanewmusical@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              padding: '20px 36px', borderRadius: 999,
              background: cyan, color: ink, border: 'none', textDecoration: 'none',
              fontSize: 13, letterSpacing: '0.28em', fontWeight: 700, textTransform: 'uppercase',
              cursor: 'pointer', boxShadow: `0 0 50px ${cyan}77`,
            }}>
              ✉ &nbsp;Contact the Team
              <span style={{ opacity: 0.6, fontSize: 11, letterSpacing: '0.15em', textTransform: 'none' }}>
                voiceanewmusical@gmail.com
              </span>
            </a>
          </div>
        </div>

        <div style={{
          marginTop: 120, fontSize: 10, letterSpacing: '0.3em', opacity: 0.4,
          position: 'relative',
        }}>
          VOICE THE MUSICAL · ALL RIGHTS RESERVED TO THE WRITERS
        </div>
      </footer>
    </div>
  );
};

window.Submerged = Submerged;
