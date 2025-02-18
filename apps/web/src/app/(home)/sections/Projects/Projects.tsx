import { groq } from "next-sanity";
import { Heading } from "ui";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.scss";
import type { SanityProject } from "@/lib/sanity";
import { sanityFetch } from "@/lib/sanity/fetch";

export async function Projects(): Promise<JSX.Element> {
	const projects: SanityProject[] = await sanityFetch<SanityProject[]>({
		query: groq`*[_type=="project"] | order(orderRank)`,
		tags: ["home", "projects"],
	});

	return (
		<div className="section wrapper">
			<Heading level={1}>Наши проекты</Heading>
			<div className={styles.projects}>
				{projects.map((project: SanityProject) => (
					<ProjectCard {...project} key={project._id} />
				))}
			</div>
		</div>
	);
}
