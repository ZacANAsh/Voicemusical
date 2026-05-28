// Direction 2 — Submerged: cinematic dark theatrical.
// Inky black bg, cyan glow, big bold modern display type, ambient waves,
// Hadestown/Wicked website energy.

const useIsMobile = (bp = 760) => {
  const [m, setM] = React.useState(
    typeof window !== 'undefined' && window.innerWidth <= bp
  );
  React.useEffect(() => {
    const onR = () => setM(window.innerWidth <= bp);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, [bp]);
  return m;
};

const Submerged = () => {
  const c = window.VOICE_CONTENT;
  const [playing, setPlaying] = React.useState(false);
  const [track, setTrack] = React.useState(0);
  const m = useIsMobile();
  const pad = m ? '60px 20px' : '120px 56px';

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

      {/* ── CONFIDENTIAL STRIP ──────────────────────── */}
      <div style={{
        position: 'relative', zIndex: 6,
        borderBottom: `1px solid ${cyan}22`,
        background: `${ink2}cc`,
        backdropFilter: 'blur(8px)',
        padding: m ? '6px 18px' : '8px 56px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
        fontSize: m ? 9 : 10, letterSpacing: m ? '0.22em' : '0.32em',
        textTransform: 'uppercase', color: cyan,
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, opacity: 0.9 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: cyan, boxShadow: `0 0 8px ${cyan}` }} />
          Electronic Press Kit
        </span>
        <span style={{ opacity: 0.55 }}>Confidential · Industry Use Only</span>
      </div>

      {/* ── NAV ─────────────────────────────────────── */}
      <nav style={{
        position: 'relative', zIndex: 5,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: m ? '16px 18px' : '24px 56px',
      }}>
        <div style={{
          fontFamily: wordmark, fontWeight: 500, fontSize: m ? 18 : 22,
          letterSpacing: '0.08em', color: cream,
        }}>
          VOICE<span style={{ color: cyan }}>.</span>
        </div>
        {!m && (
          <ul style={{ display: 'flex', gap: 40, listStyle: 'none', margin: 0, padding: 0, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
            {['Story','Cast','Listen','Team'].map(x => (
              <li key={x} style={{ opacity: 0.7 }}>{x}</li>
            ))}
          </ul>
        )}
        <a href="mailto:voiceanewmusical@gmail.com" style={{
          padding: m ? '8px 14px' : '10px 22px', borderRadius: 999,
          background: cyan, color: ink, border: 'none', textDecoration: 'none',
          fontSize: m ? 9 : 11, letterSpacing: m ? '0.2em' : '0.28em', fontWeight: 600,
          textTransform: 'uppercase', cursor: 'pointer',
          boxShadow: `0 0 30px ${cyan}66`,
        }}>Contact</a>
      </nav>

      {/* ── HERO ────────────────────────────────────── */}
      <section style={{ position: 'relative', padding: m ? '20px 18px 60px' : '40px 56px 100px', minHeight: m ? 'auto' : 900, overflow: 'hidden' }}>
        {/* poster — faded right (desktop) / centered behind title (mobile) */}
        <div style={{
          position: 'absolute',
          right: m ? '50%' : -100,
          top: m ? 80 : 40,
          transform: m ? 'translateX(50%)' : 'none',
          width: m ? 360 : 820,
          height: m ? 360 : 820,
          opacity: m ? 0.25 : 0.55,
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
          zIndex: 1, pointerEvents: 'none',
        }}>
          <img src="assets/poster.png" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: `hue-rotate(-5deg) saturate(1.2) drop-shadow(0 0 60px ${cyan}66)` }} alt="" />
        </div>

        {/* ambient wave SVG */}
        <svg style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: m ? 100 : 200, opacity: 0.25, pointerEvents: 'none', zIndex: 1 }} viewBox="0 0 1280 200" preserveAspectRatio="none">
          <path d="M0 120 Q160 60 320 100 T640 100 T960 100 T1280 100 L1280 200 L0 200 Z" fill={teal} />
          <path d="M0 140 Q160 100 320 130 T640 130 T960 130 T1280 130 L1280 200 L0 200 Z" fill={cyan} opacity="0.4" />
        </svg>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: m ? 'none' : 700, paddingTop: m ? 40 : 80 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '6px 14px', borderRadius: 999,
            border: `1px solid ${cyan}66`, background: `${cyan}10`,
            fontSize: m ? 9 : 10, letterSpacing: m ? '0.2em' : '0.3em', color: cyan,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: cyan, boxShadow: `0 0 10px ${cyan}` }} />
            FESTIVAL WORKSHOP · AMDA SUMMERFEST 2026
          </div>

          <h1 style={{
            fontFamily: wordmark, fontWeight: 500,
            fontSize: m ? 84 : 260, lineHeight: 0.9, letterSpacing: '0.01em',
            margin: m ? '20px 0 0' : '32px 0 0', color: cream,
            textShadow: `0 0 80px ${cyan}33`,
          }}>
            VOICE<span style={{ color: cyan }}>.</span>
          </h1>

          <div style={{ fontFamily: display, fontStyle: 'italic', fontSize: m ? 22 : 36, marginTop: m ? 18 : 28, lineHeight: 1.25, color: cream, opacity: 0.9, maxWidth: 640 }}>
            A young woman refuses to trade her truth for a fairytale ending.
          </div>

          <div style={{ fontSize: m ? 11 : 14, letterSpacing: m ? '0.25em' : '0.3em', opacity: 0.55, marginTop: m ? 16 : 24, textTransform: 'uppercase' }}>
            The Little Mermaid · Turned Inside Out
          </div>

          <div style={{ marginTop: m ? 36 : 56, display: 'flex', gap: m ? 10 : 14, flexDirection: m ? 'column' : 'row', alignItems: m ? 'stretch' : 'flex-start' }}>
            <a href="#listen" style={{
              padding: m ? '14px 24px' : '16px 32px', borderRadius: 999,
              background: cyan, color: ink, border: 'none', textDecoration: 'none', textAlign: 'center',
              fontSize: m ? 11 : 12, letterSpacing: '0.25em', fontWeight: 700, textTransform: 'uppercase',
              cursor: 'pointer', boxShadow: `0 0 40px ${cyan}55`,
            }}>▶ &nbsp;Hear the Music</a>
            <a href="#story" style={{
              padding: m ? '14px 24px' : '16px 32px', borderRadius: 999,
              background: 'transparent', color: cream, border: `1px solid ${cream}66`, textDecoration: 'none', textAlign: 'center',
              fontSize: m ? 11 : 12, letterSpacing: '0.25em', fontWeight: 600, textTransform: 'uppercase',
              cursor: 'pointer',
            }}>Read the Story ↓</a>
          </div>

          <div style={{ marginTop: m ? 40 : 60, fontSize: m ? 9 : 11, letterSpacing: m ? '0.2em' : '0.28em', opacity: 0.5, textTransform: 'uppercase', lineHeight: 1.6 }}>
            Book by Zach Adam &amp; Eidan Lipper · Music &amp; Lyrics by Zach Adam
          </div>

          {/* status callout — INLINE on mobile */}
          {m && (
            <div style={{
              marginTop: 32, padding: 18,
              background: `${ink2}cc`, backdropFilter: 'blur(20px)',
              border: `1px solid ${cyan}33`, borderRadius: 4,
            }}>
              <div style={{ fontSize: 9, letterSpacing: '0.3em', color: cyan, marginBottom: 8 }}>↳ STATUS</div>
              <div style={{ fontFamily: display, fontStyle: 'italic', fontSize: 15, lineHeight: 1.4 }}>
                Festival workshop at <span style={{ color: cyan }}>AMDA Summerfest 2026</span>. Recently presented in concert featuring <span style={{ color: cyan }}>Bonnie Milligan</span> &amp; <span style={{ color: cyan }}>Donald Webber Jr.</span>
              </div>
            </div>
          )}
        </div>

        {/* status callout — ABSOLUTE on desktop */}
        {!m && (
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
        )}
      </section>

      {/* ── SYNOPSIS ───────────────────────────────── */}
      <section id="story" style={{ padding: pad, position: 'relative' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : '280px 1fr', gap: m ? 32 : 80 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.35em', color: cyan, textTransform: 'uppercase' }}>01 / Story</div>
            <h2 style={{
              fontFamily: display, fontStyle: 'italic', fontWeight: 300,
              fontSize: m ? 44 : 72, lineHeight: 0.95, margin: '20px 0 0',
            }}>
              The{m ? ' ' : <br/>}Synopsis
            </h2>
            <div style={{ marginTop: m ? 24 : 40 }}>
              <div style={{ fontSize: 10, letterSpacing: '0.35em', opacity: 0.5, marginBottom: 12 }}>THEMES</div>
              <div style={{ display: 'flex', flexDirection: m ? 'row' : 'column', flexWrap: 'wrap', gap: 10 }}>
                {c.themes.map(t => (
                  <div key={t} style={{
                    padding: '8px 14px', border: `1px solid ${cyan}44`, borderRadius: 999,
                    fontSize: m ? 11 : 12, letterSpacing: '0.1em', display: 'inline-block', alignSelf: 'flex-start',
                  }}>{t}</div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ fontSize: m ? 15 : 19, lineHeight: 1.7, color: '#d8d0bb' }}>
            <p style={{ margin: 0, fontFamily: display, fontStyle: 'italic', fontSize: m ? 20 : 28, color: cream, lineHeight: 1.35, marginBottom: m ? 24 : 32 }}>
              {c.synopsisShort}
            </p>
            {c.synopsisFull.slice(3).map((p, i) => (
              <p key={i} style={{ margin: '0 0 16px' }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHARACTERS ─────────────────────────────── */}
      <section style={{ padding: pad, background: ink2, position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `radial-gradient(circle at 70% 20%, ${teal}22, transparent 50%)`,
        }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', justifyContent: 'space-between', alignItems: m ? 'flex-start' : 'flex-end', marginBottom: m ? 36 : 56, gap: m ? 16 : 0 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.35em', color: cyan, textTransform: 'uppercase' }}>02 / Cast</div>
              <h2 style={{
                fontFamily: display, fontStyle: 'italic', fontWeight: 300,
                fontSize: m ? 40 : 80, lineHeight: 0.95, margin: '20px 0 0',
              }}>
                Two Worlds, <span style={{ color: cyan }}>One Voice.</span>
              </h2>
            </div>
            <div style={{ maxWidth: 360, fontSize: m ? 13 : 14, lineHeight: 1.5, opacity: 0.7 }}>
              Each performer plays a role in Gabi's real world and a mirror role in the fairytale she invents.
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {c.characters.map((ch, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: m ? '1fr' : '320px 1fr',
                gap: m ? 14 : 56,
                padding: m ? '24px 0' : '32px 0',
                borderTop: `1px solid ${cream}14`,
                position: 'relative',
              }}>
                {/* LEFT — index + name + role + meta */}
                <div style={{ position: 'relative' }}>
                  <div style={{
                    fontFamily: display, fontStyle: 'italic',
                    fontSize: m ? 14 : 13, color: cyan, opacity: 0.7,
                    letterSpacing: '0.2em', marginBottom: m ? 6 : 10,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{
                    fontFamily: wordmark, fontWeight: 500,
                    fontSize: m ? 24 : 30, lineHeight: 1.05,
                    letterSpacing: '0.03em',
                  }}>
                    {ch.name}
                  </div>
                  <div style={{
                    fontFamily: display, fontStyle: 'italic',
                    fontSize: m ? 14 : 16, color: cyan, opacity: 0.85,
                    marginTop: 6, lineHeight: 1.3,
                  }}>
                    ↳ {ch.alt}
                  </div>
                  <div style={{
                    fontSize: 10, letterSpacing: '0.28em', opacity: 0.55,
                    marginTop: 12, textTransform: 'uppercase',
                  }}>
                    {ch.age} · {ch.voice}
                  </div>
                </div>
                {/* RIGHT — full description */}
                <p style={{
                  margin: 0,
                  fontSize: m ? 14 : 15.5, lineHeight: 1.65,
                  color: '#d8d0bb', opacity: 0.92,
                  textWrap: 'pretty',
                }}>
                  {ch.desc}
                </p>
              </div>
            ))}
            {/* closing rule */}
            <div style={{ borderTop: `1px solid ${cream}14` }} />
          </div>
        </div>
      </section>

      {/* ── LISTEN ─────────────────────────────────── */}
      <section id="listen" style={{ padding: pad, position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <div style={{ marginBottom: m ? 36 : 48 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.35em', color: cyan, textTransform: 'uppercase' }}>03 / Listen</div>
            <h2 style={{
              fontFamily: display, fontStyle: 'italic', fontWeight: 300,
              fontSize: m ? 40 : 80, lineHeight: 0.95, margin: '20px 0 0',
            }}>
              Demo <span style={{ color: cyan }}>Score.</span>
            </h2>
            <div style={{ marginTop: 16, fontSize: m ? 14 : 16, opacity: 0.75, maxWidth: 720, lineHeight: 1.5 }}>
              If you took <em style={{ fontFamily: display, fontSize: m ? 16 : 18 }}>Wicked</em>, <em style={{ fontFamily: display, fontSize: m ? 16 : 18 }}>Dear Evan Hansen</em> and your favorite Disney musicals and transformed them into something excitingly new — you'd get <em style={{ fontFamily: display, fontSize: m ? 16 : 18, color: cyan }}>Voice</em>.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 24 : 56, alignItems: 'stretch' }}>
            {/* Samply embed — left half */}
            <div style={{
              padding: m ? 16 : 24,
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
                  width: '100%', flex: 1, minHeight: m ? 480 : 540, border: `1px solid ${cream}11`,
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
              minHeight: m ? 320 : 580,
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
      <section id="team" style={{ padding: pad, background: ink2 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: m ? 36 : 56 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.35em', color: cyan, textTransform: 'uppercase' }}>04 / Team</div>
            <h2 style={{
              fontFamily: display, fontStyle: 'italic', fontWeight: 300,
              fontSize: m ? 40 : 80, lineHeight: 0.95, margin: '20px 0 0',
            }}>
              The <span style={{ color: cyan }}>Creators.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 24 : 56 }}>
            {c.creators.map((p, i) => (
              <div key={i} style={{
                padding: m ? 20 : 32, background: `${ink}80`,
                border: `1px solid ${cream}10`, borderRadius: 6,
                display: 'grid', gridTemplateColumns: m ? '110px 1fr' : '150px 1fr', gap: m ? 18 : 28, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: m ? 110 : 150, height: m ? 146 : 200, overflow: 'hidden',
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
                    fontFamily: wordmark, fontWeight: 500, fontSize: m ? 22 : 32,
                    margin: '0 0 8px', lineHeight: 1.05, letterSpacing: '0.04em',
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
                  <div style={{ fontSize: m ? 12.5 : 13.5, lineHeight: 1.7, opacity: 0.82 }}>
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
      <footer style={{ padding: m ? '80px 20px 40px' : '120px 56px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* wing-necklace blended into the bottom */}
        <div style={{
          position: 'absolute', left: '50%', bottom: m ? -60 : -120, transform: 'translateX(-50%)',
          width: m ? 600 : 1200, maxWidth: '120%', pointerEvents: 'none',
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
            fontSize: m ? 48 : 110, lineHeight: 1, letterSpacing: '0.02em',
            margin: 0,
          }}>
            LET HER BE <span style={{ color: cyan }}>HEARD.</span>
          </h2>
          <div style={{ marginTop: m ? 20 : 28, fontFamily: display, fontStyle: 'italic', fontSize: m ? 17 : 22, opacity: 0.8, maxWidth: 600, margin: m ? '20px auto 0' : '28px auto 0', lineHeight: 1.4 }}>
            For inquiries — get in touch.
          </div>
          <div style={{ marginTop: m ? 28 : 40 }}>
            <a href="mailto:voiceanewmusical@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center', gap: m ? 8 : 14,
              flexDirection: m ? 'column' : 'row',
              padding: m ? '16px 24px' : '20px 36px', borderRadius: m ? 16 : 999,
              background: cyan, color: ink, border: 'none', textDecoration: 'none',
              fontSize: m ? 11 : 13, letterSpacing: '0.25em', fontWeight: 700, textTransform: 'uppercase',
              cursor: 'pointer', boxShadow: `0 0 50px ${cyan}77`,
            }}>
              <span>✉ &nbsp;Contact the Team</span>
              <span style={{ opacity: 0.6, fontSize: m ? 10 : 11, letterSpacing: '0.15em', textTransform: 'none' }}>
                voiceanewmusical@gmail.com
              </span>
            </a>
          </div>
        </div>

        <div style={{
          marginTop: m ? 80 : 120, fontSize: m ? 9 : 10, letterSpacing: '0.3em', opacity: 0.4,
          position: 'relative', lineHeight: 1.7,
        }}>
          VOICE THE MUSICAL · ALL RIGHTS RESERVED TO THE WRITERS
        </div>
      </footer>
    </div>
  );
};

window.Submerged = Submerged;
