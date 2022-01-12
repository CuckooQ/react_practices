export default function handler(req, res) {
  const timer = setTimeout(() => {
    res.status(200).json({ name: "CuckooQ" });
    clearTimeout(timer);
  }, 1000);
}
