
import { MessageSquare, Twitter, Gift } from "lucide-react";
import { motion } from "framer-motion";

const taskTypes = [
  {
    number: "01",
    icon: <Twitter className="h-6 w-6 text-blue-400" />,
    title: "Social Engagement",
    description: "Connect with our vibrant community on Twitter and stay updated with the latest NFT drops"
  },
  {
    number: "02",
    icon: <MessageSquare className="h-6 w-6 text-purple-400" />,
    title: "Community Building",
    description: "Join our Discord community to participate in exclusive events and discussions"
  },
  {
    number: "03",
    icon: <Gift className="h-6 w-6 text-pink-400" />,
    title: "Daily Rewards",
    description: "Complete daily tasks to earn XP and NEFT tokens while growing your collection"
  }
];

export const TaskTypes = () => {
  return (
    <div className="pt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/10 via-transparent to-transparent blur-3xl" />
      
      <motion.div 
        className="text-center mb-16 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-light text-white">
          Complete Tasks and Earn
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto font-light">
          Join our growing community and earn rewards by completing exciting tasks
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {taskTypes.map((task, index) => (
          <motion.div 
            key={task.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative group"
          >
            <div className="relative bg-gradient-to-br from-white/5 to-white/0 p-8 rounded-xl h-full flex flex-col space-y-4 overflow-visible border border-white/10 hover:border-white/20 transition-all duration-300">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-white to-transparent" />
              <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
              <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gradient-to-l from-white to-transparent" />
              <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gradient-to-t from-white to-transparent" />

              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/10">
                {task.icon}
              </div>
              
              <h3 className="text-xl font-light text-white">
                {task.title}
              </h3>
              
              <p className="text-white/70 text-sm flex-grow font-light">
                {task.description}
              </p>

              {/* Large number positioned half outside */}
              <div className="absolute -bottom-8 right-6 text-8xl font-bold text-white/10 transition-all duration-300 group-hover:text-white/20">
                {task.number}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
