import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

interface QuestionProps {
  questions: {
    id: number;
    question: string;
    alt1: {
      name: string;
      slug: string;
    };
    alt2: {
      name: string;
      slug: string;
    };
    correct: string;
  }[];
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

    if (value === "joao") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "maria") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <div>
      {props.questions.map((question) => (
        <form onSubmit={handleSubmit} tabIndex={question.id}>
          <FormControl sx={{ m: 3 }} error={error} variant="standard">
            <FormLabel id="demo-error-radios">{question.question}</FormLabel>
            <RadioGroup
              aria-labelledby="demo-error-radios"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value={question.alt1.slug}
                control={<Radio />}
                label={question.alt1.name}
              />
              <FormControlLabel
                value={question.alt2.slug}
                control={<Radio />}
                label={question.alt2.name}
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button
              sx={{ mt: 1, mr: 1, maxWidth: 110 }}
              type="submit"
              variant="contained"
            >
              Responder
            </Button>
          </FormControl>
        </form>
      ))}
    </div>
  );
}
