import type { Metadata } from 'next'
import { RootProvider } from 'fumadocs-ui/provider/next'
import './global.css'
import { Inter } from 'next/font/google'
import { appName } from '@/lib/shared'

const inter = Inter({
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		default: appName,
		template: `%s | ${appName}`
	},
	icons: {
		icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }]
	}
}

export default function Layout({ children }: LayoutProps<'/'>) {
	return (
		<html lang='en' className={inter.className} suppressHydrationWarning>
			<body className='flex min-h-screen flex-col'>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	)
}
