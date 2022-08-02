import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

interface QuestionProps {
    question: {
      id: number;
      request: string;
      alt1: {
        name: string,
        slug: string,
      },
      alt2: {
        name: string,
        slug: string,
      },
      correct: string;
    }
}

export default function Question(props: QuestionProps) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Escolha uma opção");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value === props.question.correct) {
      setHelperText("Você acertou!");
      setError(false);
    } else if (value !== props.question.correct) {
      setHelperText("Você errou!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit} key={props.question.id}>
          <FormControl sx={{ m: 3 }} error={error} variant="standard">
            <FormLabel id="demo-error-radios" sx={{fontSize: 25}}>{props.question.request}</FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value={props.question.alt1.slug}
                control={<Radio />}
                label={props.question.alt1.name}
              />
              <FormControlLabel
                value={props.question.alt2.slug}
                control={<Radio />}
                label={props.question.alt2.name}
              />
            </RadioGroup>
            <FormHelperText sx={{fontSize: 18}}>{helperText}</FormHelperText>
            <Button
              sx={{ mt: 1, mr: 1, maxWidth: 110 }}
              type="submit"
              variant="contained"
              color="warning"
            >
              Responder
            </Button>
          </FormControl>
        </form>
    </div>
  );
}
