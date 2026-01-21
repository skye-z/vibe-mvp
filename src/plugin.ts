import type { Plugin } from "@opencode-ai/plugin"
import { tool } from "@opencode-ai/plugin";
import fs from "node:fs/promises";
import path from "node:path";

function getPluginTemplateDir(): string {
  const home = process.env.HOME || process.env.USERPROFILE || "";
  return path.join(home, ".config", "opencode", "plugins", "vibe-mvp", "template");
}

export const VibeMVPPlugin: Plugin = async (ctx) => {
  return {
    tool: {
      mvp_init: tool({
        description: "根据当前上下文初始化VibeMVP项目管理服务",
        args: {
          projectName: tool.schema.string().optional().describe("项目名称(也可以从项目下读取猜测)"),
          requirements: tool.schema.string().describe("使用自然语言描述项目需求(也可以从项目下读取分析)"),
        },
        async execute(args) {
          const projectName = args.projectName || "MyProject";
          const requirements = args.requirements;

          const currentDir = ctx.directory || process.cwd();
          const templateDir = getPluginTemplateDir();
          const mvpDir = path.join(currentDir, ".mvp");

          await fs.cp(templateDir, mvpDir, { recursive: true });

          const prompt = `在 \`.mvp\` 目录中为是 MVP 管理方案模板，它由两个语言(中文和英文)三个模块组成，分别是：

- guide：指南，这里存放项目的流程、设定、配置项、特殊要求等等
- modules：模块，这里将项目各个功能拆分为模块，每个模块是不同的md文件，里面存放此模块的信息
- roadmap：路线图，这是最重要的，将项目需求依照MVP最小化可行产品拆分版本，版本拆分最少四个，因为一个是初始版本(安装依赖、创建目录结构等)、一个是最小可用版本(完成核心功能可以满足项目最基本的需求)、一个是测试版本(完成E2E、系统测试等测试之后的版本)、一个是未来迭代版本(完成剩余的功能需求)

**项目名称**: ${projectName}
**项目需求**: ${requirements}

请完成以下任务：
1. 替换 \`+++++++\` 包裹的变量，填充项目相关内容
2. 分析项目需求，在guide中撰写方案
3. 将项目各个功能拆分为模块，然后在modules中创建各个模块的文档
4. 综合guide和modules，为项目拆分版本，将其写在roadmap中

最后，希望你的MVP方案尽可能的完善

完成后请执行：
\`\`\`bash
cd .mvp && yarn install && yarn run docs:dev
\`\`\`

然后告知用户从 http://localhost:23000 查看文档`;
          return prompt;
        },
      }),
      mvp_add: tool({
        description: "在VibeMVP中添加新的需求",
        args: {
          requirements: tool.schema.string().optional().describe("使用自然语言描述项目需求(不提供就读取项目自动分析后续还能做哪些新的工作)"),
        },
        async execute(args) {
          const requirements = args.requirements || "读取项目分析后续还能做哪些不在`.mvp/roadmap`中的新的工作";
          const prompt = `**项目需求**: ${requirements}

请根据新的项目需求，更新\`.mvp/roadmap\`路线图，新增版本路线图文件你自己考虑合适的执行时机来决定版本号

路线图设计中你应该要考虑到这个需求是否有前置条件？这个需求完成后是否应该加一个路线图todo执行测试？多了这个需求之后专门的‘测试版本’路线图是否需要更新？

路线图版本文件名称格式要求是：v0-0，即将版本号中的点换成横杠`;
          return prompt;
        },
      }),
      mvp_next: tool({
        description: "按照VibeMVP的计划继续执行开发任务",
        async execute() {
          return `请读取\`.mvp/roadmap\`路线图，继续执行未完成的任务

如果对功能和需求有疑问先检索\`.mvp/guide\`和\`.mvp/modules\`，如果还是无法解决你的疑惑，请直接询问用户

你在继续执行路线图中未完成的任务过程中，请及时更新文档(\`.mvp\`)，在每个todo完成后记得提交git`;
        },
      })
    },
  };
};

export default VibeMVPPlugin;