import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";

const ActionsApplied: React.FC = () => {
  const [hasError, setHasError] = useState(false);

  const handleClick = () => {
    setHasError(true);
    setTimeout(() => setHasError(false), 1500);
  };

  return (
    <div>
      <div className="text-2xl mb-4">Application Examples</div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <button className="bg-blue-500 p-4 uppercase text-white rounded shadow-md">
            Regular Button
          </button>
          <Button
            variant="contained"
            className="bg-blue-500"
            component={motion.button}
            whileTap={{ scale: 0.9 }}
          >
            Animated Button
          </Button>
        </div>
        <div className="flex flex-row gap-4">
          <motion.div
            animate={{ translateX: hasError ? [-10, 10, -10, 10, 0] : 0 }}
          >
            <TextField
              placeholder="Type something"
              InputProps={{
                className: hasError ? "border border-red-500" : "",
              }}
            ></TextField>
          </motion.div>
          <Button
            variant="contained"
            className="bg-blue-500"
            component={motion.button}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActionsApplied;
