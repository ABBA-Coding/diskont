export default function ({ redirect, store }) {
  if (process.client) {
    const token = localStorage.getItem("dis_auth_token");
    if (!token) redirect("/");
  }
}
