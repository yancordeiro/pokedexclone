export function getColor(type: any) {
  switch (type) {
    case "bug":
      return "#C3CE75";

    case "water":
      return "#609FB5";

    case "grass":
      return "#48D0B0";

    case "fire":
      return "#FB6C6C";

    case "normal":
      return "#C2C2A1";

    case "poison":
      return "#7C538C";

    case "electric":
      return "#FFD86F";

    case "ground":
      return "#B1736C";

    case "fairy":
      return "#F469A9";

    case "fighting":
      return "#D6B591";

    case "psychic":
      return "#9B7FA6";

    case "ghost":
      return "#735797";

    case "rock":
      return "#A6AAB6";

    case "ice":
      return "#7FCCEC";

    case "flying":
      return "#BAB0D5";

    case "dark":
      return "#333";

    case "dragon":
      return "#F9BE00";

    case "steel":
      return "#CCCCDE";

    case "unknown":
      return "#C2C2A1";

    default:
      return "#C2C2A1";
  }
}
