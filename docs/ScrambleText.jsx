const { useState, useEffect, useRef, useCallback } = React;

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-#";

function rand(len) {
  let r = "";
  for (let i = 0; i < len; i++) r += CHARS[Math.floor(Math.random() * CHARS.length)];
  return r;
}

function ScrambleText(props) {
  const text = props.text || "";
  const trigger = props.trigger || "mount"; // "mount" | "view" | "hover"
  const delay = Number(props.delay) || 0;
  const speed = Number(props.speed) || 30;
  const Tag = props.as || "span";
  const auto = trigger === "mount";

  const [prefix, setPrefix] = useState(auto ? "" : text);
  const [ghost, setGhost] = useState(() => (auto && text ? rand(text.length) : ""));
  const iv = useRef(null);
  const ran = useRef(false);
  const host = useRef(null);

  const scramble = useCallback(() => {
    let pos = 0;
    setPrefix("");
    setGhost(rand(text.length));
    if (iv.current) clearInterval(iv.current);
    iv.current = setInterval(() => {
      if (pos >= text.length) {
        clearInterval(iv.current);
        iv.current = null;
        setPrefix(text);
        setGhost("");
        return;
      }
      pos++;
      setPrefix(text.substring(0, pos));
      setGhost(rand(text.length - pos));
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    if (trigger !== "mount" || ran.current) return;
    ran.current = true;
    const t = setTimeout(scramble, delay);
    return () => {
      clearTimeout(t);
      if (iv.current) clearInterval(iv.current);
    };
  }, [trigger, delay, scramble]);

  useEffect(() => {
    if (trigger !== "view" || !host.current) return;
    const el = host.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting && !ran.current) {
          ran.current = true;
          setTimeout(scramble, delay);
          io.disconnect();
        }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [trigger, delay, scramble]);

  useEffect(() => () => { if (iv.current) clearInterval(iv.current); }, []);

  if (!text) return React.createElement(Tag, null);

  return React.createElement(
    Tag,
    { ref: host, style: { whiteSpace: "normal" } },
    prefix,
    ghost ? React.createElement("span", { style: { opacity: 0.3 } }, ghost) : null
  );
}

module.exports = { ScrambleText };
