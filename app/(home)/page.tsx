import Link from 'next/link'
import { appName, docsRoute, gitConfig } from '@/lib/shared'

const githubHref = `https://github.com/${gitConfig.user}/${gitConfig.repo}`

const highlights = [
	{
		title: '心智对齐',
		body: '用前端熟悉的类型直觉、模块与异常模型做对照，降低「第二门语言」的排异反应。'
	},
	{
		title: '教程骨架',
		body: '压缩自 Python 3.12 官方教程，每章附权威链接，需要细节时一键回到官方定义。'
	},
	{
		title: '现代阅读体验',
		body: '使用用 Fumadocs 承载同一知识骨架：样式与站内搜索，提供更良好的阅读体验。'
	}
]

export default function HomePage() {
	return (
		<div className='bg-fd-background text-fd-foreground flex flex-1 flex-col'>
			<div className='relative isolate flex flex-1 flex-col overflow-hidden'>
				<div
					aria-hidden
					className='pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-30'
					style={{
						background:
							'radial-gradient(ellipse 85% 55% at 50% -25%, hsl(210 100% 56% / 0.22), transparent 55%), radial-gradient(ellipse 70% 45% at 100% 5%, hsl(240 12% 38% / 0.14), transparent 50%), radial-gradient(ellipse 55% 40% at 0% 90%, hsl(210 90% 50% / 0.08), transparent 45%)'
					}}
				/>

				<div className='mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 pt-14 pb-20 sm:pt-20 sm:pb-24'>
					<header className='flex flex-col items-center text-center'>
						<img
							src='/favicon.svg'
							alt=''
							width={280}
							height={86}
							className='mb-8 h-14 w-auto max-w-[min(260px,78vw)] drop-shadow-[0_14px_40px_hsl(210_100%_50%/0.32)] sm:h-17'
						/>
						<h1 className='mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl'>{appName}</h1>
						<p className='text-fd-muted-foreground max-w-xl text-base leading-relaxed text-pretty sm:text-lg'>
							给中高级前端准备的 Python 精简教程：快速建立语义与工程习惯，并把本站当作日常脚本和标准库的速查入口。
						</p>
						<div className='mt-10 flex flex-wrap items-center justify-center gap-3'>
							<Link
								href={docsRoute}
								className='inline-flex min-h-10 items-center justify-center rounded-lg bg-[#338EFF] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2b7ee6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#338EFF]'>
								开始阅读
							</Link>
							<a
								href={githubHref}
								target='_blank'
								rel='noreferrer'
								className='border-fd-border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent inline-flex min-h-10 items-center justify-center rounded-lg border px-6 py-2.5 text-sm font-medium transition'>
								GitHub 仓库
							</a>
						</div>
					</header>

					<section aria-labelledby='highlights-heading' className='mt-20 sm:mt-24'>
						<h2 id='highlights-heading' className='sr-only'>
							站点特点
						</h2>
						<ul className='grid gap-4 sm:grid-cols-3 sm:gap-5'>
							{highlights.map(({ title, body }) => (
								<li
									key={title}
									className='border-fd-border bg-fd-card/80 supports-backdrop-filter:bg-fd-card/60 rounded-xl border p-5 text-left shadow-sm backdrop-blur-sm'>
									<h3 className='text-fd-card-foreground mb-2 text-sm font-semibold tracking-tight'>{title}</h3>
									<p className='text-fd-muted-foreground text-sm leading-relaxed'>{body}</p>
								</li>
							))}
						</ul>
					</section>

					<p className='text-fd-muted-foreground mt-14 text-center text-xs'>
						文档内容随 Python 3.12 官方教程演进；建议本地建 <code className='bg-fd-muted rounded px-1.5 py-0.5 font-mono text-[0.7rem]'>venv</code> 边读边试。
					</p>
				</div>
			</div>
		</div>
	)
}
