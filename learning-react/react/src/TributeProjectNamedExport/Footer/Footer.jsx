import { format } from "date-fns";
function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="text-center">
      <p>
        <b>&copy; {year}</b> All Rights Reserved
      </p>
    </div>
  );
}
export default Footer;
