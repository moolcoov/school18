import cn from "classnames";
import Skeleton from "react-loading-skeleton";
import sectionStyles from "../Post.module.scss";
import metaStyles from "./PostMeta/PostMeta.module.scss";
import textStyles from "./PostText/PostText.module.scss";

export function PostFallback(): JSX.Element {
	return (
		<main className={cn(sectionStyles.section, sectionStyles.section_content)}>
			<div className={sectionStyles["section__main-content"]}>
				<div className={metaStyles.meta} style={{ lineHeight: 1 }}>
					<Skeleton circle height={25} width={25} />

					<Skeleton height={23} width={5} />
					<Skeleton height={23} width={35} />
					<Skeleton height={23} width={5} />
					<Skeleton height={23} width={123} />
				</div>

				<div className={textStyles.text}>
					<Skeleton count={3} height={24} width="100%" />
					<Skeleton count={8} height={24} width="100%" />
					<Skeleton count={2} height={24} width="100%" />
				</div>
			</div>

			<Skeleton height="auto" style={{ aspectRatio: "1920/1000" }} width="100%" />
		</main>
	);
}
