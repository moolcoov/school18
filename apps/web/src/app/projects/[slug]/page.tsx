import { groq } from "next-sanity";
import cn from "classnames";
import { ProjectBanner } from "./Banner";
import { ProjectMeta } from "./Meta";
import styles from "./Project.module.scss";
import { ProjectContentAbout } from "./content/About";
import type { SanityProject } from "@/lib/sanity";
import { sanityFetch } from "@/lib/sanity";

export default async function ProjectPage({ params }: { params: { slug: string } }): Promise<JSX.Element> {
	const project: SanityProject = await sanityFetch({
		query: groq`*[_type=="project" && slug.current=="${params.slug}"][0] {
			...,
			manager->,
			cluster->
		}`,
		tags: [`projects/${params.slug}`],
	});

	return (
		<main className={cn(styles.project, "wrapper")}>
			<ProjectBanner {...project} />
			<div className={styles.project__main}>
				<div className={styles.project__main__content}>
					<ProjectContentAbout content={project.about} />
				</div>
				<ProjectMeta manager={project.manager} />
			</div>
		</main>
	);
}
