import cssBaseline from "./cssBaseline";
import textField from "./textField";
import { Theme } from "@mui/material/styles";

export default function ComponentOverrides(theme: Theme) {
  return Object.assign(cssBaseline(theme), textField(theme));
}
