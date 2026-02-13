import { listProtocols } from "../services/protocol.service.js";

export const getProtocols = async (req, res) => {
  const data = listProtocols();
  res.json({ data });
};
