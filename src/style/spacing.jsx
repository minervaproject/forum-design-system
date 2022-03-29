import { space } from "./variables";

function spacing(props) {
  const { m } = props;
  const mb = props.mb || props.my;
  const ml = props.ml || props.mx;
  const mr = props.mr || props.mx;
  const mt = props.mt || props.my;

  const { p } = props;
  const pb = props.pb || props.py;
  const pl = props.pl || props.px;
  const pr = props.pr || props.px;
  const pt = props.pt || props.py;

  return {
    margin: m && (typeof m === "string" ? m : space[m]),
    marginBottom: mb && (typeof mb === "string" ? mb : space[mb]),
    marginLeft: ml && (typeof ml === "string" ? ml : space[ml]),
    marginRight: mr && (typeof mr === "string" ? mr : space[mr]),
    marginTop: mt && (typeof mt === "string" ? mt : space[mt]),

    padding: p && (typeof p === "string" ? p : space[p]),
    paddingBottom: pb && (typeof pb === "string" ? pb : space[pb]),
    paddingLeft: pl && (typeof pl === "string" ? pl : space[pl]),
    paddingRight: pr && (typeof pr === "string" ? pr : space[pr]),
    paddingTop: pt && (typeof pt === "string" ? pt : space[pt]),
  };
}

export { spacing };
