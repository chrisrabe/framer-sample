import React from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const SimpleActions: React.FC = () => {
  return (
    <div>
      <div className="text-2xl mb-4">Simple Actions</div>
      <div className="flex flex-wrap gap-6">
        <Box className="flex flex-col items-center">
          <Box
            className="w-32 h-32 bg-blue-500 rounded cursor-pointer"
            component={motion.div}
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.5 }}
          />
          <span>Shrink</span>
        </Box>
        <Box className="flex flex-col items-center">
          <Box
            className="w-32 h-32 bg-blue-500 rounded cursor-pointer"
            component={motion.div}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.25 }}
          />
          <span>Grow</span>
        </Box>
        <Box className="flex flex-col items-center">
          <Box
            className="w-32 h-32 bg-blue-500 rounded cursor-pointer"
            component={motion.div}
            initial={{ padding: 0 }}
            whileHover={{ padding: "0.75rem" }}
          >
            <Box className="w-full h-full bg-red-500 rounded"></Box>
          </Box>
          <span>Squeeze</span>
        </Box>
        <Box className="flex flex-col items-center">
          <Box className="w-32 h-32 bg-blue-500 rounded cursor-pointer">
            <Box
              component={motion.div}
              className="w-full h-full bg-red-500 rounded"
              initial={{ margin: 0 }}
              whileHover={{ marginLeft: "0.75rem" }}
            ></Box>
          </Box>
          <span>Push</span>
        </Box>
        <Box className="flex flex-col items-center">
          <Box
            component={motion.div}
            className="w-32 h-32 bg-blue-500 rounded cursor-pointer"
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 45, transition: { duration: 0.5 } }}
          />
          <span>Rotate</span>
        </Box>
        <Box className="flex flex-col items-center">
          <Box
            component={motion.div}
            className="w-32 h-32 rounded cursor-pointer"
            initial={{ background: "#3b82f6" }}
            whileHover={{
              background: "#EF4444",
            }}
          />
          <span>Colour</span>
        </Box>
        <Box className="flex flex-col items-center">
          <Box
            component={motion.div}
            className="w-32 h-32 rounded bg-blue-500 cursor-pointer"
            initial={{ translateX: 0 }}
            whileHover={{
              translateX: "0.75rem",
            }}
          />
          <span>Left / Right</span>
        </Box>
        <Box className="flex flex-col items-center">
          <Box
            component={motion.div}
            className="w-32 h-32 rounded bg-blue-500 cursor-pointer"
            initial={{ translateY: 0 }}
            whileHover={{
              translateY: "-0.75rem",
            }}
          />
          <span>Up / Down</span>
        </Box>
        <Box className="flex flex-col items-center">
          <Box
            component={motion.div}
            className="w-32 h-32 rounded bg-blue-500 cursor-pointer"
            initial={{ boxShadow: "0 0 0 rgba(0, 0, 0, 0)" }}
            whileHover={{
              boxShadow: "0 0.75rem 1.5rem rgba(0, 0, 0, 0.25)",
              borderRadius: "100%",
            }}
          />
          <span>Attributes</span>
        </Box>
      </div>
    </div>
  );
};

export default SimpleActions;
