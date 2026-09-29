// Vercel Serverless Function
export default function handler(req, res) {
  const { echostr = "" } = req.query || {};

  // 获取请求来源 IP
  const xff = req.headers["x-forwarded-for"] || "";
  const ip = xff.split(",")[0] || req.socket?.remoteAddress || "";

  // 打日志（在 Vercel Logs 里能看到）
  console.log("wechat callback from ip:", ip, "echostr:", echostr);

  // 微信验证阶段只需要原样返回 echostr，不要多余字符
  res.status(200).send(echostr);
}