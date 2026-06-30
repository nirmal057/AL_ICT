
"use client"

import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { Binary, Link2, Server, FileText, Code, Globe } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Separator } from '../ui/separator';

export function WwwDeconstructed({ isPrintView }: { isPrintView: boolean }) {
  const [url, setUrl] = useState('');
  const [protocol, setProtocol] = useState('');
  const [hostname, setHostname] = useState('');
  const [pathname, setPathname] = useState('');
  const [isDeconstructed, setIsDeconstructed] = useState(false);

  useEffect(() => {
    // This code runs only on the client, after hydration, to get the current URL
    const currentUrl = window.location.href;
    const currentProtocol = window.location.protocol;
    const currentHostname = window.location.hostname;
    const currentPathname = window.location.pathname;
    
    setUrl(currentUrl);
    setProtocol(currentProtocol);
    setHostname(currentHostname);
    setPathname(currentPathname);
  }, []);

  const historyText = `1991 දී ටිම් බර්නර්ස්-ලී (Tim Berners-Lee) විසින් WWW නිර්මාණය කරන ලදී. ඔහු විසින් හඳුන්වාදුන් URL (වෙබ් ලිපිනය), HTTP (දත්ත හුවමාරු නියමාවලිය) සහ HTML (වෙබ් පිටු නිර්මාණය කරන භාෂාව) යන තාක්ෂණයන් අදටත් වෙබ් අඩවි ක්‍රියාත්මක වීමේ පදනමයි.`;
  const historyHtml = `<p class="text-sm">${historyText}</p>`;

  if (isPrintView) {
      return (
          <div className="text-sm not-prose p-4 border rounded-lg bg-slate-50">
            <h4 className="font-semibold mb-2 flex items-center gap-2"><Globe className="h-4 w-4"/>ඉතිහාසයෙන්: WWW හි උපත</h4>
            <p>{historyText}</p>
          </div>
      )
  }

  return (
    <Card className="not-prose">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Globe className="h-5 w-5" />ඉතිහාසයෙන්: WWW හි උපත</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{historyText}</p>
      </CardContent>
       <CardFooter className="flex-col items-start gap-2 p-0">
          <div className="p-4 w-full">
             {!isDeconstructed ? (
              <Button variant="outline" size="sm" onClick={() => setIsDeconstructed(true)}>Deconstruct Current URL</Button>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                    <p className="text-xs text-muted-foreground font-semibold flex items-center gap-1.5"><Link2 className="h-3 w-3"/> URL Breakdown:</p>
                    {url ? (
                    <div className="flex flex-wrap items-center gap-1 p-2 bg-background border rounded-md text-sm font-mono shadow-inner">
                        <TooltipProvider><Tooltip><TooltipTrigger asChild><Badge variant="secondary" className="cursor-help">{protocol}</Badge></TooltipTrigger><TooltipContent><p className="flex items-center gap-2"><Binary className="h-4 w-4"/> Protocol</p></TooltipContent></Tooltip></TooltipProvider>
                        <span className="text-muted-foreground">//</span>
                        <TooltipProvider><Tooltip><TooltipTrigger asChild><Badge variant="secondary" className="cursor-help">{hostname}</Badge></TooltipTrigger><TooltipContent><p className="flex items-center gap-2"><Server className="h-4 w-4"/> Hostname</p></TooltipContent></Tooltip></TooltipProvider>
                        <TooltipProvider><Tooltip><TooltipTrigger asChild><Badge variant="outline" className="cursor-help truncate max-w-[150px]">{pathname}</Badge></TooltipTrigger><TooltipContent><p className="flex items-center gap-2"><FileText className="h-4 w-4"/> Path</p></TooltipContent></Tooltip></TooltipProvider>
                    </div>
                    ) : <p className="text-sm text-muted-foreground">Loading URL...</p>}
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-semibold flex items-center gap-1.5"><Code className="h-3 w-3"/> HTML Source:</p>
                  <Textarea 
                    readOnly 
                    value={historyHtml}
                    className="text-xs font-mono bg-background h-20 resize-none"
                  />
                </div>

                <Button variant="link" size="sm" className="p-0 h-auto" onClick={() => setIsDeconstructed(false)}>Hide Deconstruction</Button>
              </div>
            )}
          </div>
      </CardFooter>
    </Card>
  );
}
