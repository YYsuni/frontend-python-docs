import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { appName, gitConfig } from './shared'

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: (
				<span className='flex items-center gap-2'>
					<img src='/favicon.svg' alt='' width={28} height={28} className='size-7 shrink-0' />
					{appName}
				</span>
			)
		},
		githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`
	}
}
