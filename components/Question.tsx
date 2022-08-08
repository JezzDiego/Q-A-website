import { useState, ChangeEvent, FormEvent } from "react";
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
      name: string;
      slug: string;
    };
    alt2: {
      name: string;
      slug: string;
    };
    alt3: {
      name: string;
      slug: string;
    };
    alt4: {
      name: string;
      slug: string;
    };
    alt5: {
      name: string;
      slug: string;
    };
    correct: string;
  };
}

export default function Question(props: QuestionProps) {
  const [value, setValue] = useState(" ");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("Escolha uma opção");

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value === props.question.correct) {
      setHelperText("Você acertou!");
      setError(false);
    } else if (value !== props.question.correct) {
      setHelperText("Você errou!");
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} key={props.question.id}>
        <FormControl sx={{ m: 3 }} error={error} variant="standard">
          <FormLabel
            id="demo-error-radios"
            sx={{ fontSize: 20, textAlign: "justify" }}
          >
            {props.question.request}
          </FormLabel>
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
            <FormControlLabel
              value={props.question.alt3.slug}
              control={<Radio />}
              label={props.question.alt3.name}
            />
            <FormControlLabel
              value={props.question.alt4.slug}
              control={<Radio />}
              label={props.question.alt4.name}
            />
            <FormControlLabel
              value={props.question.alt5.slug}
              control={<Radio />}
              label={props.question.alt5.name}
            />
          </RadioGroup>
          <FormHelperText sx={{ fontSize: 18 }}>{helperText}</FormHelperText>
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
