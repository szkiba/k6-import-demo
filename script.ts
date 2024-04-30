import { Faker } from "xk6-faker";

export default function () {
  let f = new Faker();
  console.log(f.address.city());
}
