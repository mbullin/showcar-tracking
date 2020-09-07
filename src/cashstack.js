(function () {
 
    window.cmpEnabled = false;
    tcf20();
    window.cmpEnabled = false;

    function tcf20() {
        var tldToLiveRampMap = {
            at: '3e24114e-f793-4eba-8c0f-735086de7eb6',
            be: '207bd477-df32-4ebe-91f2-69d7feec18b2',
            de: '110d886b-ed81-45b5-ae2b-716b2f723ee9',
            es: '4411e5b3-1b15-4c38-8b0b-a1bd0a7c1c15',
            fr: 'cd417891-edbe-4abd-9417-c6a2791634e4',
            it: '7fa21d14-bb68-4b5e-b85f-b5ae26b92696',
            lu: 'd32b30c5-1df5-4e45-825e-1f0d7ce19b08',
            nl: '7a9273aa-bc97-4542-bed2-4ee53960a5ae',
            com: '94a59b49-b7ea-4e1c-93c9-95a65811342b',
            bg: 'c91d7583-8f6b-4377-9930-d2f4121c077e',
            cz: 'af726efc-d085-4dcd-b1b2-d70bec664c9b',
            ru: '1f94bd98-a90c-42b8-b0f6-dd27eab93973',
            pl: 'f45e019f-1401-499f-a329-19c20067273d',
            hu: '47d0ac99-7029-4dae-91ac-15dd5793eded',
            hr: '04a29971-bbd1-4577-a5fb-07e85b4933d3',
            ro: 'c4949c4e-b1b9-4434-919d-c766202554e5',
            se: '5aeab49d-a921-494f-9b8a-84001adbab72',
            tr: 'd54e7f74-947c-49b3-9eb8-248cbad044fb',
            ua: '730298e4-c5c4-463b-a86c-ead192d21c6f',
        };

        var tld = window.location.hostname.split('.').pop();
        var liverampTcf2Id = tldToLiveRampMap[tld];

        function loadLiveRampCmp2(uid) {
            var script = document.createElement('script');
            var ref = document.getElementsByTagName('script')[0];
            ref.parentNode.insertBefore(script, ref);
            script.src = 'https://gdpr-wrapper.privacymanager.io/gdpr/' + uid + '/gdpr-liveramp.js';
        }

        // TCF stub
        // prettier-ignore
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://gdpr.privacymanager.io/1.0.10/",n(n.s=38)}({38:function(e,t){!function(){if("function"!=typeof window.__tcfapi){var e,t=[],n=window,r=n.document,a=n.__tcfapi?n.__tcfapi.start:function(){};!n.__tcfapi&&function e(){var t=!!n.frames.__tcfapiLocator;if(!t)if(r.body){var a=r.createElement("iframe");a.style.cssText="display:none",a.name="__tcfapiLocator",r.body.appendChild(a)}else setTimeout(e,5);return!t}()&&(n.__tcfapi=function(n,r,a,o){var i=[n,r,a,o];if(!i.length)return t;if("setGdprApplies"===i[0])i.length>3&&2===parseInt(i[1],10)&&"boolean"==typeof i[3]&&(e=i[3],"function"==typeof i[2]&&i[2]("set",!0));else if("ping"===i[0]){var c={gdprApplies:e,cmpLoaded:!1,apiVersion:"2.0"};"function"==typeof i[2]&&i[2](c,!0)}else t.push(i)},n.__tcfapi.commandQueue=t,n.__tcfapi.start=a,n.addEventListener("message",(function(e){var t="string"==typeof e.data,r={};try{r=t?JSON.parse(e.data):e.data}catch(e){}var a=r.__tcfapiCall;a&&n.__tcfapi(a.command,a.version,(function(n,r){if(e.source){var o={__tcfapiReturn:{returnValue:n,success:r,callId:a.callId,command:a.command}};t&&(o=JSON.stringify(o)),e.source.postMessage(o,"*")}}),a.parameter)}),!1))}}()}});

        if (tld === 'be') {
            __tcfapi('changeLanguage', null, function () {}, location.pathname.startsWith('/nl') ? 'nl' : 'fr');
        }

        if (tld === 'nl') {
            const callback = (tcData, success) => {
                if (success && (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete')) {
                    window.__tcfapi('removeEventListener', 2, () => {}, tcData.listenerId);

                    __tcfapi('getTCData', 2, function (tcData, success) {
                        if (
                            tcData.purpose.consents[1] &&
                            tcData.purpose.consents[2] &&
                            tcData.purpose.consents[3] &&
                            tcData.purpose.consents[4] &&
                            tcData.purpose.consents[5] &&
                            tcData.purpose.consents[6] &&
                            tcData.purpose.consents[7] &&
                            tcData.purpose.consents[8] &&
                            tcData.purpose.consents[9] &&
                            tcData.purpose.consents[10]
                        ) {
                            loadGTM();
                        }
                    });
                }
            };

            window.__tcfapi('addEventListener', 2, callback);
        } else {
            loadGTM();
        }

        if (tld !== 'de') {
            loadLiveRampCmp2(liverampTcf2Id);
            return;
        }

        function getCookieValue(a) {
            var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
            return b ? b.pop() : '';
        }

        var userId = getCookieValue('as24Visitor');

        fetch(
            'https://cmp-optimizely-fs.as24-media.eu-west-1.infinity.as24.tech/activate/cmp_themes_comparison/' + userId
        )
            .then(function (r) {
                return r.json();
            })
            .then(function (data) {
                // data.userid
                // data.variation

                function sendEvent(event) {
                    var url =
                        'https://cmp-optimizely-fs.as24-media.eu-west-1.infinity.as24.tech/sendevent/' +
                        data.userid +
                        '/' +
                        event;

                    if ('sendBeacon' in navigator) {
                        navigator.sendBeacon(url);
                    } else {
                        new Image().src = url;
                    }
                }

                window.__tcfapi(
                    'addEventListener',
                    2,
                    function () {
                        sendEvent('cmpAcceptAll');
                    },
                    'acceptAllButtonClicked'
                );

                window.__tcfapi(
                    'addEventListener',
                    2,
                    function () {
                        sendEvent('cmpSaveAndExit');
                    },
                    'saveAndExitButtonClicked'
                );

                window.__tcfapi(
                    'addEventListener',
                    2,
                    function () {
                        sendEvent('cmpExit');
                    },
                    'exitButtonClicked'
                );

                window.__tcfapi(
                    'addEventListener',
                    2,
                    function () {
                        sendEvent('cmpExit');
                    },
                    'saveAndExitButtonClicked'
                );

                window.__tcfapi(
                    'addEventListener',
                    2,
                    function () {
                        sendEvent('cmpExit');
                    },
                    'acceptAllButtonClicked'
                );

                window.__tcfapi(
                    'addEventListener',
                    2,
                    function () {
                        sendEvent('cmpShown');
                    },
                    'consentToolShouldBeShown'
                );

                if (window.location.pathname.startsWith('/angebote/')) {
                    window.addEventListener('click', function (e) {
                        if (!e || !e.target || !e.target.closest) {
                            return;
                        }

                        var isCallButton = !!e.target.closest('a[href^="tel:"]');
                        if (isCallButton) {
                            sendEvent('cmpCall');
                            return;
                        }

                        var isEmailButton = !!e.target.closest('[data-cip-id="submit"]');
                        if (isEmailButton) {
                            sendEvent('cmpEmail');
                            return;
                        }
                    });
                }

                var liverampIdByVariation = {
                    variation_1: '110d886b-ed81-45b5-ae2b-716b2f723ee9',
                    variation_2: 'c05a5065-d405-47de-875a-9bdb14d9b960',
                    variation_3: 'b906c984-4280-47dd-a90b-a322954fc01b',
                    variation_4: 'a7e8fb93-5f1f-4375-b321-8e998143ae61',
                };

                var liverampid = liverampIdByVariation[data.variation];

                loadLiveRampCmp2(liverampid);
            });
    }
    
})();

function loadGTM() {
    const tld = window.location.hostname.split('.').pop();
    const containerIdsByTld = {
        de: 'GTM-MK57H2',
        at: 'GTM-WBZ87G',
        be: 'GTM-5BWB2M',
        lu: 'GTM-NDBDCZ',
        es: 'GTM-PS6QHN',
        fr: 'GTM-PD93LD',
        it: 'GTM-WTCSNR',
        nl: 'GTM-TW48BJ',
        com: 'GTM-KWX9NX',
    };

    const containerId = containerIdsByTld[tld] || containerIdsByTld['com'];

    (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', containerId);
}
