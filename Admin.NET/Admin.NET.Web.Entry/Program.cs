using Microsoft.Extensions.Options;

Serve.Run(RunOptions.Default.AddWebComponent<WebComponent>());

public class WebComponent : IWebComponent
{
    public void Load(WebApplicationBuilder builder, ComponentContext componentContext)
    {
        // 
        builder.Logging.AddFilter((provider, category, logLevel) =>
        {
            return !new[] { "Microsoft.Hosting", "Microsoft.AspNetCore" }.Any(u => category.StartsWith(u)) && logLevel >= LogLevel.Information;
        });

        // 
        builder.Configuration.Get<WebHostBuilder>().ConfigureKestrel(u =>
        {
            //u.Limits.KeepAliveTimeout = TimeSpan.FromMinutes(30);
            //u.Limits.RequestHeadersTimeout = TimeSpan.FromMinutes(30);
            u.Limits.MaxRequestBodySize = null;
            
        });
    }
}