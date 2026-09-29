// Vercel Serverless Function
export default function handler(req, res) {
  const { echostr = "" } = req.query || {};
  // 微信验证阶段只需要原样返回 echostr，不要多余字符
  res.status(200).send(echostr);
}